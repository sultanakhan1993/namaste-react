1) What is NPM 
NPM is a package manager..its manages packges..npm is a standard reposetory for all the packages..its biggest package manager
any package you need to include in your project you can use npm.all the packges are hoisted over there ..

2) what is this  package.json
this package.json file is basically a configration for  npm.it has created a json file..in the json structure we have got this
it basically keep are track of all the dependency ,all the packages our code is using.it keeps and track of what version of  package installed into our system

3) what is the need of package.json
4) what is a bundler
when you have this normal html,css,js file our whole code needs to be bundle together,our whole code needs to be minifide,
our whole code needs to be cleaned,before it can be send to production..so our bundler helps to do all that thing.
webpack ,parcel,veet these are bundler.bundle basically bundles your app it basically package your app properly . so that 
it can be shipped to production.ehen we create a create-react-app that create-raect-app behind the schene this is webpack ,
webpack bundlers.

there are two types of packages,two types of dependancy we have installed one is the dev dependancy and one is the normal dependancy

what is dev dependancy ?
so when we say a dev dependancy it means it generally required for in our development ,in our development phase,when we are developing our app when we required that dev dependancy and our normal dependancy our use in production also..that is what the diffrence between   dev dependancy and normal  dependancy.

parcel is a bundler ,chunking,minification,is done whrre,is not done on production .we will do this on developemnt phase ..so we
will installed parcel as a dev dependency.

parcel is a beast it will do a lots of thing to our app it will give our app ..or app is jst like skelton with just bones in it
parcel will give it musles.parcel will give it strength it is amazed

"parcel": "^2.10.3" what is the sign over here ^
this is basically known as carat... if you have ut this caret into your app parcel will automatically be update this version.
if there is a minor update parcel will automatically be update this version ...if i put a tilde ..major upgrades
diffrent between caret(^) and tilde(~)

what is package-lock.json
package-lock.json keep the track of exact version that is being installed suppose if today is a 2.8.5 release my package.json will  stay like this my package.json can have 2.8.3 and caret(^) on it.but package-lock.json kind of lokes the version keeps the record of it. package-lock.json  keeps the record of every like exact version of that packcage of that dependancy which is installed

when i installed npm installed parcel there is one more thing created that was node_modules..
this node_modules contains all the code that we fatch from npm when we did npm installed parcel what happen was it just went to the production it took some time right it took 1 min to installed kind of parcel.that is was going of it was fetching all the code of parcel and put it inside node_modeles.if you will go over there you will see parsel over there this is the actual parcel code which npm is fetched
node_modules is like kind of database.it contains the actual data of that dependancy of those packages that are project need that is ehy there is node modules

node_modules basically fetches all the code of all the dependancy into our sysytem.node_modules is like kind of database
where all our packages exist.

parcel as a project has its own  dependancy and those dependancies can have its own dependancies this is known as transitive dependencies.
our project has a package.json which shows parcel is a dependancy.now this parcel can itself be dependent on lots of things.
parcel does a lots of thing in our project ..parcel can not do all these thing on its own.parcel need help of a lots of other packages that is why when you installed parcel..paercel say ok npm plaese installed other packages also..parcel need helps of babel also parcel need help of a lots of other packages that is why we have so many folders inside our node

node_modules is a collection of dependencies it is  kind of like a databse like all are packages all are files,all are code,all are dependancies actual code is there ..its huge

if you have package.json and package-lock.json you can recreate all your node-modules even i just have to do npm install. hit enter.it recreate my node_modules

npx parcel index.html //command
just like we have npm similarly we have something known as npx.npx means executing a package.npm command are diffrent.when you installed a package you need to write npm installed and then you installed a package but suppose if you want to execute a package you just write npx parcel and something...npx anypackage name it will execute a package.

cdn link are not the good way is not a prefered way to bring react and reactDom into your project

what makes react app faster ? what makes your development experience better ?
React app is not just having react .React uses a lot of other libraries lot of other packages lot of other dependencies our project will need to make it a production ready large scale application





