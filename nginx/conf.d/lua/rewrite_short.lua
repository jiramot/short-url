content_by_lua '
  local redis_connector = require "resty.redis.connector"
  local rc = redis_connector.new()

  local redis, err = rc:connect{ url = "redis://172.31.0.2:6379/3" }

  if not redis then
    ngx.log(ngx.WARN, err)
    ngx.exit(503)
    return
  end

  local slug = "slug-" .. ngx.var.p_id
  local url, err = redis:get(slug)

  if not url then
    ngx.exit(404)
    return
  elseif url == ngx.null then
    ngx.exit(404)
    return
  else
    ngx.redirect(url, 301)
  end
';
