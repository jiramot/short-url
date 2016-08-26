# Short Url Service
- nginx with lua for redirect request
- redis for cache short url
- short application for api insert and update short url

# How to run
At first ip of redis in nginx/default.conf because lua can not result domain name. it need to be fix redis ip in default.conf

http://short.ly/xxx -> search value witn key 'slug-xxx' in redis (index 3) -> return redirect(301) to url value
