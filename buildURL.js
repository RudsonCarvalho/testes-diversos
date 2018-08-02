function buildUrl(url, options) {
  const baseUrl = _getBaseUrl(url);
  const opts = _getOptions(url, options);

  if (!opts) return baseUrl;
  
  urlWithPath = _appendPath(baseUrl, opts.path);
  urlWithPathAndQueryParams = _appendQueryParams(urlWithPath, opts.queryParams)
  urlWithPathQueryParamsAndHash = _appendHash(urlWithPathAndQueryParams, opts.hash);

  return urlWithPathQueryParamsAndHash;
};

function _getBaseUrl(url) {
  if (url === null || typeof(url) === 'object')
    return '';
  else
    return url;
}

function _getOptions(url, options) {
  if (typeof(url) === 'object') 
    return url;
  return options;
}

function _appendPath(baseUrl, path) {
  if (!path)
    return baseUrl;  
  return baseUrl += '/' + path;
}

function _appendQueryParams(urlWithPath, queryParams) {
  if (!queryParams) return urlWithPath

  const keyValueStrings = Object.keys(queryParams).map(key => {return `${key}=${queryParams[key]}`;});
  const joinedKeyValueStrings = keyValueStrings.join('&');

  return `${urlWithPath}?${joinedKeyValueStrings}`;
}

function _appendHash(urlWithPathAndQueryParams, hash) {
  if (!hash) return urlWithPathAndQueryParams;  
  return `${urlWithPathAndQueryParams}#${hash}`;
}