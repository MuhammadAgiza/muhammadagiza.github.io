module Jekyll
  # Generates a page for each unique project keyword (label)
  class KeywordPageGenerator < Generator
    safe true
    priority :low # Run after other content is processed

    def generate(site)
      # 1. Collect all unique keywords from project pages
      all_keywords = Set.new
      site.pages.each do |page|
        if page.data['type'] == 'project' && page.data['labels'].is_a?(Array)
          page.data['labels'].each { |label| all_keywords.add(label.to_s) } # Ensure labels are strings
        end
      end

      if all_keywords.empty?
        Jekyll.logger.info "KeywordPageGenerator:", "No keywords found in project pages."
        return
      end

      Jekyll.logger.info "KeywordPageGenerator:", "Generating pages for keywords: #{all_keywords.to_a.join(', ')}"

      # 2. For each keyword, generate a new page
      all_keywords.each do |keyword|
        # The content for the new page will mimic the original /projects/keyword.html
        # It sets the 'keyword' variable and includes the projects listing.
        page_content = "{% assign keyword = page.keyword %}\n{% include projects/projects.html keyword=keyword %}"

        # Create a new page instance.
        # The directory structure will be /projects/keyword/YOUR_KEYWORD/
        # The filename will be index.html for clean URLs.
        # Jekyll's Utils.slugify can be used if keywords might contain characters
        # unsuitable for directory names, but your links use uri_escape,
        # so we'll assume the keyword string itself is usable as a path segment.
        dir_path = File.join("projects", "keyword", keyword)

        new_page = PageWithoutAFile.new(site, site.source, dir_path, "index.html")
        new_page.content = page_content
        new_page.data['layout'] = 'home'
        new_page.data['keyword'] = keyword
        new_page.data['title'] = "Projects - #{keyword}"
        # The permalink is implicitly defined by the dir_path and name.

        site.pages << new_page
      end

      Jekyll.logger.info "KeywordPageGenerator:", "Finished generating #{all_keywords.size} keyword pages."
    end
  end

  # Helper class for creating pages that don't originate from a source file.
  # This is a common pattern for Jekyll generators.
  class PageWithoutAFile < Page
    def read_yaml(*)
      @data ||= {}
    end
  end
end