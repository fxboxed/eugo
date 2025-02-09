+++
title = "Default title"
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
decription = ""
categories = ["General"]
author = ["eugo"]
+++

# some content