(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{508:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#installation-setup"}},[a._v("Installation & Setup")]),s("ul",[s("li",[s("a",{attrs:{href:"#first-steps"}},[a._v("First steps")])]),s("li",[s("a",{attrs:{href:"#configure-the-docker-container"}},[a._v("Configure the docker container")])]),s("li",[s("a",{attrs:{href:"#launching-the-docker-container"}},[a._v("Launching the docker container")])]),s("li",[s("a",{attrs:{href:"#monitor-your-container-s"}},[a._v("Monitor your container(s):")])])])]),s("li",[s("a",{attrs:{href:"#configuring-bagisto"}},[a._v("Configuring Bagisto")]),s("ul",[s("li",[s("a",{attrs:{href:"#install-without-composer"}},[a._v("Install without composer")])]),s("li",[s("a",{attrs:{href:"#install-with-composer"}},[a._v("Install with composer")])]),s("li",[s("a",{attrs:{href:"#configure-apache"}},[a._v("Configure Apache")])]),s("li",[s("a",{attrs:{href:"#ready"}},[a._v("Ready")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker"),s("OutboundLink")],1),a._v(" is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. Docker can also be used for defining and running multi-container Docker applications using Docker-Compose tool.")]),a._v(" "),s("p",[a._v("With the help of docker-compose, you can define containers to be build, their configuration, links, volumes, ports etc in a single file and it gets launched by a single command.\nYou can also add multiple servers and services just by adding them to docker-compose configuration file. This configuration file is in "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/YAML",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML"),s("OutboundLink")],1),a._v(" format.")]),a._v(" "),s("h4",{attrs:{id:"application-data-and-database-volume-persistance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-data-and-database-volume-persistance"}},[a._v("#")]),a._v(" Application Data and Database Volume Persistance")]),a._v(" "),s("p",[a._v("It is recommended to keep your application files and database data volume on the docker host and mount them on the running container, this to ensure that the application and database data persistance even in the case of containers' failure or termination, In this way even if you destroy containers, your data won't get lost unless you remove them forcefully.\nThis compose configuration file mounts the application directory "),s("code",[a._v("app")]),a._v(" and database volume "),s("code",[a._v("dbvolume")]),a._v(" from host to running docker containers at the time of containers launch.")]),a._v(" "),s("h2",{attrs:{id:"installation-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[a._v("#")]),a._v(" Installation & Setup")]),a._v(" "),s("h3",{attrs:{id:"first-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-steps"}},[a._v("#")]),a._v(" First steps")]),a._v(" "),s("p",[a._v("Before you can launch Bagisto in a docker environment you need to install the latest version of Docker and Docker Compose.")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker-compose"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("Composer"),s("OutboundLink")],1),a._v(" (optional)")])]),a._v(" "),s("h3",{attrs:{id:"configure-the-docker-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-docker-container"}},[a._v("#")]),a._v(" Configure the docker container")]),a._v(" "),s("p",[a._v("Once Docker and docker-compose have been installed, we need to create a "),s("strong",[a._v("docker-compose.yml")]),a._v(" file."),s("br"),a._v("\nThe "),s("strong",[a._v("docker-compose.yml")]),a._v(" configuration file requires following inputs from the user:")]),a._v(" "),s("h4",{attrs:{id:"webserver-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[a._v("#")]),a._v(" Webserver configuration")]),a._v(" "),s("p",[a._v("In the "),s("code",[a._v("web_server")]),a._v(" service block, assign your system working user uid to the "),s("code",[a._v("USER_UID")]),a._v(" enviroment variable."),s("br"),a._v("\nRun the following command "),s("code",[a._v("id -u")]),a._v(" on linux or Macos to get your user id")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -u\n")])])]),s("h4",{attrs:{id:"database-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-configuration"}},[a._v("#")]),a._v(" Database configuration")]),a._v(" "),s("p",[a._v("In the "),s("code",[a._v("database_server")]),a._v(" service block, assign mysql database name, mysql database user name, mysql database user password and mysql root password to "),s("code",[a._v("MYSQL_DATABASE")]),a._v(", "),s("code",[a._v("MYSQL_USER")]),a._v(", "),s("code",[a._v("MYSQL_PASSWORD")]),a._v(" and "),s("code",[a._v("MYSQL_ROOT_PASSWORD")]),a._v(" environment.")]),a._v(" "),s("h4",{attrs:{id:"clone-configuration-from-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-configuration-from-github"}},[a._v("#")]),a._v(" Clone configuration from Github")]),a._v(" "),s("p",[a._v("You can make use of our repository from Github by cloning this in your new directory")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/bagisto/bagisto-docker.git "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h4",{attrs:{id:"configure-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-manually"}},[a._v("#")]),a._v(" Configure manually")]),a._v(" "),s("ul",[s("li",[a._v("Create a new folder for example "),s("strong",[a._v("bagisto-docker")]),a._v(" and create "),s("strong",[a._v("docker-compose.yml")]),a._v(" manually inside it.")]),a._v(" "),s("li",[a._v("Add the following content to "),s("strong",[a._v("docker-compose.yml")])])]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3'")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("web_server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" webkul/apache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" apache2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/www/html\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("working_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /var/www/html/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("USER_UID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mention your system user ID here. ex: 1001, 1000, 33, etc'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" bagisto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("network\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'80:80'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("expose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'80'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" database_server\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("links")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" database_server\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database_server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.7")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_DATABASE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mention the name of the database to be created here. eg: mydatabase'")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mention database user here. eg: mydatabase_user'")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mention database user password here. ex: mystrongPassword'")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mention mysql root password here. ex: mysqlstrongpass'")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MYSQL_ROOT_HOST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" bagisto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("network\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3306:3306'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("expose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3306'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./dbvolume"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/mysql\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dbvolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bagisto-network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])])]),s("h4",{attrs:{id:"download-the-docker-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-docker-image"}},[a._v("#")]),a._v(" Download the docker image")]),a._v(" "),s("p",[a._v("The following command will download the docker images for apache-php version 7.3 and mysql version 5.7.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("docker-compose pull\n")])])]),s("h3",{attrs:{id:"launching-the-docker-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launching-the-docker-container"}},[a._v("#")]),a._v(" Launching the docker container")]),a._v(" "),s("p",[a._v("The following command will create a network, launch a webserver and database containers with names "),s("code",[a._v("apache2")]),a._v(" and "),s("code",[a._v("mysql")]),a._v(".\nIt will also create a new "),s("code",[a._v("app")]),a._v(" and "),s("code",[a._v("dbvolume")]),a._v(" directory inside your current directory and mount it to respective docker containers as mentioned in docker-compose.yml.\nIt binds your "),s("code",[a._v("host port 80")]),a._v(" with the apache2 container port 80 and "),s("code",[a._v("host port 3306")]),a._v(" with mysql container port 3306. If you want to run containers on ports other than 80 and 3306, modify their values in "),s("strong",[a._v("docker-compose.yml")]),a._v(" file.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker-compose up -d\n")])])]),s("h3",{attrs:{id:"monitor-your-container-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitor-your-container-s"}},[a._v("#")]),a._v(" Monitor your container(s):")]),a._v(" "),s("p",[a._v("Check your running docker containers with the following commands")]),a._v(" "),s("p",[s("code",[a._v("docker ps")]),a._v(" OR "),s("code",[a._v("docker-compose ps")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("CONTAINER ID   IMAGE                      COMMAND                  CREATED             STATUS             PORTS                               NAMES\n62a10346b84a   webkul/apache-php:latest   "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/usr/bin/supervisord"')]),a._v("   About an hour ago   Up About an hour   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:80-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp                  apache2\n90a0a2e0e46b   mysql:5.7                  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"docker-entrypoint.s…"')]),a._v("   About an hour ago   Up About an hour   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0:3306-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("/tcp, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("33060")]),a._v("/tcp   mysql\n")])])]),s("h2",{attrs:{id:"configuring-bagisto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-bagisto"}},[a._v("#")]),a._v(" Configuring Bagisto")]),a._v(" "),s("p",[a._v("Once our environment is ready we can start installing Bagisto. You can either install Bagisto from "),s("a",{attrs:{href:"#install-without-composer"}},[a._v("Github")]),a._v(" or with "),s("a",{attrs:{href:"#install-with-composer"}},[a._v("composer")])]),a._v(" "),s("h3",{attrs:{id:"install-without-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-without-composer"}},[a._v("#")]),a._v(" Install without composer")]),a._v(" "),s("p",[a._v("Clone "),s("a",{attrs:{href:"https://github.com/bagisto/bagisto",target:"_blank",rel:"noopener noreferrer"}},[a._v("bagisto"),s("OutboundLink")],1),a._v(" inside "),s("code",[a._v("app/public_html")]),a._v(" directory and mention your system or system IP on browser and begin with installaton process.\nMention the database details same as docker-compose.yml and admin details.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/bagisto/bagisto app/public_html\n")])])]),s("p",[a._v("Run the following commands to install Bagisto.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'\"")]),a._v(" \ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'\"")]),a._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'\"")]),a._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'\"")]),a._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'\"")]),a._v("\n")])])]),s("h3",{attrs:{id:"install-with-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-with-composer"}},[a._v("#")]),a._v(" Install with composer")]),a._v(" "),s("p",[a._v("The following commands will be exexcuted within the docker container")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'composer create-project bagisto/bagisto'\"")]),a._v("\n")])])]),s("p",[a._v("Open the .env file inside "),s("code",[a._v("app/bagisto")]),a._v(" directory and set the following environment variables listed below:")]),a._v(" "),s("div",{staticClass:"language-editorconfig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-editorconfig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v("APP_URL")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("DB_CONNECTION")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("DB_HOST")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v("mysql")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("DB_PORT")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("DB_DATABASE")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("DB_USERNAME")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("DB_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token value string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")])]),a._v("\n")])])]),s("p",[a._v("Run the following commands to install Bagisto.")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan migrate'\"")]),a._v(" \ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan db:seed'\"")]),a._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan vendor:publish'\"")]),a._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'php bagisto/artisan storage:link'\"")]),a._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i apache2 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"su - www-data -s /bin/bash -c 'composer dump-autoload -d bagisto'\"")]),a._v("\n")])])]),s("p",[a._v("Bagisto has been installed and is ready. Browse your server IP address or domain name on the web browser.")]),a._v(" "),s("h3",{attrs:{id:"configure-apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-apache"}},[a._v("#")]),a._v(" Configure Apache")]),a._v(" "),s("p",[a._v("The Apache documentroot is by default assigned to "),s("strong",[a._v("/var/www/html/public_html")]),a._v(". while the "),s("strong",[a._v("app")]),a._v(" directory on host is mapped with the "),s("strong",[a._v("html")]),a._v(" directory inside the container, we need to create a symlink of "),s("code",[a._v("bagisto/public")]),a._v(" in "),s("code",[a._v("app")]),a._v(" directory to "),s("code",[a._v("/var/www/html/public_html")]),a._v(".")]),a._v(" "),s("p",[a._v("Run the following command on Linux or MacOS")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -snf bagisto/public public_html\n")])])]),s("p",[a._v("Run the following command on Windows")]),a._v(" "),s("div",{staticClass:"language-command-line extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd app\nmklink bagisto/public public_html\n")])])]),s("h3",{attrs:{id:"ready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ready"}},[a._v("#")]),a._v(" Ready")]),a._v(" "),s("h4",{attrs:{id:"login-as-a-administrator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-as-a-administrator"}},[a._v("#")]),a._v(" Login as a administrator:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("http(s)://your_server_endpoint/admin/login\n\nemail: admin@example.com\npassword: admin123\n")])])]),s("h4",{attrs:{id:"login-as-a-customer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-as-a-customer"}},[a._v("#")]),a._v(" Login as a customer")]),a._v(" "),s("p",[a._v("You can directly visit your store on "),s("RouterLink",{attrs:{to:"/1.x/introduction/http(s):/your_server_endpoint/"}},[a._v("http(s):/your_server_endpoint/")]),a._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);