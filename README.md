## bookmarklets

> small javascript bookmarklet programs to improve the experience of various websites.

### usage

to install a bookmarklet, just copy the source code from a javascript program you want in the [dist](dist/) directory and paste the text `javascript:` followed by the bookmarklet source code into a new bookmark in your browser (and give it any name).

the instructions on how to use each bookmark is contained within a comment at the top their readable source code in the [src](src/) directory. however in general, most bookmarks will work if you click on them on the correct webpage.

> note: on iOS, you'll have to create a temporary bookmark on any random site, then edit the bookmark to include the bookmarklet's source code.

### building

to build all the bookmarklets, run `bun run build`.

