---
title: Subtool demo
picture: /src/images/uploads/subtool.png
---
I had to develop in 5 days an [useful tool ](https://github.com/tbayet/subtool)for the open-source community, open project to present at a job interview. I decided to build a cooperative and **reactive socket-based** application to help translating files like subtitles (.srt) in team, loading them. It parses and packs subtitles by a chosen quantity, likes 10 by default, paginate everything, and allow to translate line by line, with keyboard navigation (enter) to focus only the next field that is unused by another member of the team. Everybody works on the same view at the same time, seeing every changes. I implemented:

* a chat where you can link to a subtitle using hashtag (ex: #31)
* a rules-editor to create and visualize, on every instance, a special case of translation (ex: darth vader => dark vador).
* a validation system by pack colors: white: unedited, orange: edited/editing, green: validated by an other
* a progress bar to see state of every pack, and liking to them by click
