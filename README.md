I've chosen to name this repo after the evil character in the Robert Louis Stevenson story, because don't let Jekyll fool you: It's evil. The special cases and bullshit are ridiculous, and the documentation is way too long yet never tells you what you need to know. It's also a pun, because this repo represents my effort to "hide" away some of my site's complexity somewhere separate.


### Order of operations for Jekyll

Jekyll converts your site in the following order:

1. **Site variables**. Jekyll looks across your files and populates site variables, such as `site`, `page`, `post`, and collection objects. (From these objects, Jekyll determines the values for permalinks, tags, categories, and other details.)
2. **Liquid**. Jekyll processes any Liquid formatting in pages that contain front matter. You can identify Liquid as follows:
	- **Liquid tags** start with `{%` and end with a `%}`. For example: `{% highlight %}` or `{% seo %}`. Tags can define blocks or be inline. Block-defining tags will also come with a corresponding end tag — for example, `{% endhighlight %}`.
	- **Liquid variables** start and end with double curly braces. For example: `{{ site.myvariable }}` or `{{ content }}`.
	- **Liquid filters** start with a pipe character (`|`) and can only be used within **Liquid variables** after the variable string. For example: the **relative_url** filter in **{{ "css/main.css" | relative_url }}**.

3. **Markdown**. Jekyll converts Markdown to HTML using the Markdown filter specified in your config file. Files must have a Markdown file extension and front matter in order for Jekyll to convert them.
4. **Layout**. Jekyll pushes content into the layouts specified by the page’s front matter (or as specified in the config file). The content from each page gets pushed into the `{{ content }}` tags within the layouts.
5. **Files**. Jekyll writes the generated content into files in the directory structure in `\_site`. Pages, posts, and collections get structured based on their permalink setting. Directories that begin with `_` (such as `\_includes` and `\_data`) are usually hidden in the output.


## IMPORTANT NOTES

Using github pages with Jekyll is an absurdly fragile black box. The server pulls from X and Y to create A and then pushes out all over the world (not immediately), and you can't read its error messages if it runs in to any problems. Github and Jekyll try to document the process, but they honestly do a poor job. Here are some neat features and some easy ways you could fuck up a success:

1. `gh-pages` branches are rendered with Jekyll and end up at `rootdomain.com/reponame`. 
2. When you add this theme as `remote_theme` in some other repo's `_config.yml`, you're commanding github to go fetch the files in here and use them to render a Jekyll site. That Jekyll program will be specifically looking for `_layouts/page.html` to render the homepage from the `README`, and if no file of that name exists in the theme, the result is indistinguishable from your theme or reference to it being completely broken.
3. ONLY files in `assets`, `_includes`, `_layouts`, and `_sass` end up in the theme. Folders named other things can be included in a compiled gem version, but that requires tweaks to the `.gemspec`. Not sure whether `remote_theme` is smart enough to read the `.gemspec` and figure out that it should be preserving other files. "When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled. To add a custom directory to your theme-gem, please edit the regexp in `____.gemspec` accordingly." -default README that comes with `jekyll new-theme ____`.
4. Jekyll outputs pages by default at `/name/index.html`, which is objectively atrocious. `permalink: /name.html` in the "front matter" to avoid this behavior.
5. Navigating down to the `_site` folder and opening the htmls causes all the relative paths to break, so the pages don't look right. Instead go to `localhost:4000/page.html`.



