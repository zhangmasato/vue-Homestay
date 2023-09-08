## 建立一个Git库
### Github建库: New repository-->本地电脑的一个路径打开cmd命令行输入命令
~~~bash
$ git clone https://github.com/zhangmasato/vue-Homestay.git
~~~
### 删除本地仓库命令--> rmdir /s /q vue-Homestay
### 本地建库: 在本地创建Git库命令
~~~bash
$ git init
~~~
## 创建Vue脚手架
### 全局安装@vue/cli, 仅第一次执行
~~~bash
$ npm install -g @vue/cli
~~~
### 切换到要创建项目的目录，然后使用命令创建项目，项目名必须全部小写
~~~bash
$ vue create vue-homestay
~~~
### 构建Vue.js项目, 这将在项目根目录下创建一个 dist 文件夹，其中包含用于部署的静态文件。
~~~bash
$ npm run build
~~~
