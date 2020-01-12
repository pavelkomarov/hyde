
## Installation

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: pavel-theme THIS NEEDS TO BE REMOTE_THEME
```

Or install it yourself as:

    $ gem install pavel-theme YES THIS




When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `pavel-theme.gemspec` accordingly.



## IMPORTANT NOTES

Using github pages with Jekyll is an absurdly fragile black box. The server pulls from X and Y to create A and then pushes out all over the world (not immediately), and you can't read its error messages if it runs in to any problems. Github and Jekyll try to document the process, but they honestly do a poor job. Here are some neat features and some easy ways you could fuck up a success:

1. `gh-pages` branches are rendered with Jekyll and end up at `rootdomain.com/reponame`. 
2. When you add this theme as `remote_theme` in some other repo's `_config.yml`, you're commanding github to go fetch the files in here and use them to render a Jekyll site. That Jekyll program will be specifically looking for `_layouts/page.html` to render the homepage from the `README`, and if no file of that name exists in the theme, the result is indistinguishable from your theme or reference to it being completely broken.
