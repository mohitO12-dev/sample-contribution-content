# Sample contribution content based on the topic "Finding SQL Injections"

## What is the structure of this repository?

* `docker`: contains a docker image that builds a hands-on training exercise, in this case written in Node.js, about learning how to find SQL injections via a login form.
* `en`: contains a single file called `README.md` which is actually the technical content that explains how to manually find SQL injections in web applications.
  * Note the writing style by using bulleted lists with short, specific sentences. This is the writing format we want to use to explain content.
  * At the end of this file there is also a special flag `@@docker_image_here@@` to indicate where the practical exercise (the instantiated docker image) will be attached when the `en/README.md` file is processed on our platform [tablab.io][1].
* `properties.json`: contains some informational data.

[1]: https://tablab.io
