2004licious theme for Shaarli
=============================

This [Shaarli](https://github.com/shaarli/shaarli) theme is a humble homage to the early looks of the [del.icio.us](http://del.icio.us) site.

Created by Joshua Schachter, [del.icio.us](http://del.icio.us) is one of the monuments of early Web 2.0 socially-oriented platforms. It now looks and works differently than it used to, after having [changed hands several times](https://en.wikipedia.org/wiki/Delicious_(website)#History). The original del.icio.us layout, with its naked but smart HTML look, is a fond memory of the earlier web days. Both of us were early users of the service, and used it during our college days and beyond to make sense of our web pathways.

[Julien Deswaef](http://xuv.be) mentioned that the current version of Delicious is [injecting ads into Delicious RSS feeds](https://twitter.com/xuv/status/790549815000268800), and gave the great advice to run [Shaarli](http://github.com/shaarli/shaarli) instead. After Julien's prodding about [creating a theme inspired by Delicious](https://twitter.com/xuv/status/791643923659755520), we made the most out of a slow Sunday and tried our hand at creating a Shaarli theme -- we attempted to emulate the 2004 look instead.

Screenshots
-----------

![Index page](https://raw.githubusercontent.com/ManufacturaInd/shaarli-2004licious-theme/master/sample-screenshots/index.png)

![Add a link page](https://github.com/ManufacturaInd/shaarli-2004licious-theme/raw/master/sample-screenshots/add.png)

Installation
------------

Just copy the folders as they are in your Shaarli installation. Do keep a backup always, in case you mess something up.

Then add or change this line to your `data/config.php` file:

```
$GLOBALS['config']['RAINTPL_TPL'] = 'tpl/2004licious/';
```


What's not working yet
----------------------

The current state of this theme is the humble result of a day-long hack. Only
the link lists and the edit link pages have been tweaked; the CSS changes made
some of the other pages (such as Settings) look pretty off.
