/*!
 * XSLT Templater - jQuery plugin for cached transforming XML with XSLT
 * <http://www.xslt-templater.com>
 * 
 * Version: 0.0.5
 * 
 * Copyright (c) 2010 Tsarev Oleg (<mailto:tsarev.oi@mail.ru>)
 * <http://live-scopes.blogspot.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

/**
 * 
 * jQuery client-side XSLT Templater plugin.
 * 
 * @author <a href="mailto:tsarev.oi@mail.ru">Tsarev Oleg</a>
 * @version 0.0.5
 * 
 */

(function($) {
	
    $.fn.xslt = function() {
        return this;
    };
    
    // Boolean key: Firefox, Opera, Chrome, Safari OR InternetExplorer 
    var FOCS;
    
    if (window.DOMParser != undefined  && 
    	window.XSLTProcessor != undefined && 
    	window.XMLHttpRequest != undefined) {
    		
       var processor = new XSLTProcessor();
       
       if ($.isFunction(processor.transformDocument)) {
           support = window.XMLSerializer != undefined;
       } else {
           support = true;
       }
       
       if (support) {
           FOCS = true;
       }
    } else if (document.recalc) {
        FOCS = false;
    }
    
    if (FOCS != undefined) {

    	/*builder-open key="local|full"*/
    	
    	// Caches
function XSLTLocalCache (browserKey,opt) {			
	var xmlDoc = null;
	var xslDoc = null;
	var xmlString = false;
	var xslString = false;
	var resultDoc = null;
	var key = false;
	var mode = (browserKey!==null)?browserKey:true;
	this.onUnlock = (opt && opt.onUnlock)?(opt.onUnlock):(function(state){});
	
	function returnString(doc) {
		return (new XMLSerializer()).serializeToString(doc);
	}
	
	this.setXmlDoc = function (xml) {
		this.xmlDoc = xml;
		if (this.mode) {
			this.xmlString = returnString(this.xmlDoc);
		}
	};
	this.setXslDoc = function (xml) {
		this.xslDoc = xml;
		if (this.mode) {
			this.xslString = returnString(this.xslDoc);
		}
	};
	
	this.getXmlDoc = function () {
		return this.xmlDoc;
	};
	this.getXmlString = function () {
		if (mode) {
			return this.xmlString;
		} else {
			if (this.xmlDoc) {
				return this.xmlDoc.xml;
			} else {
				return false;
			}
		}
	};
	
	this.getXslDoc = function () {
		return this.xslDoc;
	};
	this.getXslString = function () {
		if (mode) {
			return this.xslString;
		} else {
			if (this.xslDoc) {
				return this.xslDoc.xml;
			} else {
				return false;
			}
		}
	};
	
	this.setResultDoc = function (xml) {
		this.resultDoc = xml;
	};
	this.getResultDoc = function () {
		return this.resultDoc;
	};
	
	this.lock = function () {
		this.key = true;
	};
	this.locked = function () {
		return this.key;
	};
	this.unlock = function () {
		this.key = false;
		this.onUnlock({
			xmlDoc: this.xmlDoc,
			xslDoc: this.xslDoc,
			resultDoc: this.resultDoc
		});
	};
	
	this.checkXmlDoc = function () {
		if (this.xmlDoc) {
			return true;
		}
		return false;
	};
	this.checkXslDoc = function () {
		if (this.xslDoc) {
			return true;
		}
		return false;
	};
	this.checkResultDoc = function () {
		if (this.resultDoc) {
			return true;
		}
		return false;
	};
	
	this.reset = function () {
		this.xmlDoc = null;
		this.xslDoc = null;
		this.resultDoc = null;
	};
	
};
		$.getXSLTLocalCache = function (opt) {
			return new XSLTLocalCache(FOCS,opt);
		};
		
		/*builder-close*/
		
		$.getXSLTTemplaterInfo = function () {
			return {
				version:"0.0.5"
			};
		};
		
function XSLTBaseCache() {
	this.setElement = function (key,value) {
		if (!this[key]) {
			this[key] = value;
			return true;
		}
		return false;
	};
	this.getElement = function (key) {
		if (this[key]) {
			return this[key];
		}
		return false;
	};
}
		
		/*builder-open key="base|full"*/
		var baseCache = new XSLTBaseCache();
		/*builder-close*/
		
		/*builder-open key="ajax|full"*/
		var ajaxCache = new XSLTBaseCache();
		/*builder-close*/
		
		var fixCache = new XSLTBaseCache();
		
var debug = function(str,target) {
	if (window.console && window.console.log) {
		if (target) {
			str = str+" Element:"+target.attr("id");
		}
		window.console.log(str);
	}
};
var error = function(str) {
	if (window.console && window.console.error) {
		window.console.error(str);
	}
};
		
    	// XSLT Processor
function XSLTransformer (FOCS) {   
    var MODE = FOCS;
    		    		
	this.calculate = (MODE)?(
		function(target,xmlparameter,xslparameter,nodes,callback) {
			var processor = new XSLTProcessor();
			var resultDoc,resultString;
            if ($.isFunction(processor.transformDocument)) {
                // Mozilla interface
                resultDoc = document.implementation.createDocument("", "", null);
                processor.transformDocument(xmlparameter.responseXML, xslparameter.responseXML, resultDoc, null);
                resultString = new XMLSerializer().serializeToString(resultDoc);
                
                if (target) target.html(resultString);

            }
            else {
                processor.importStylesheet(xslparameter.responseXML);
                resultDoc = processor.transformToFragment(xmlparameter.responseXML, document);
                
                if (target) target.empty().append(resultDoc);

                resultString = new XMLSerializer().serializeToString(resultDoc);
            }
            var state = {
            	resultDoc:resultString,
            	xmlDoc:xmlparameter.responseXML,
            	xslDoc:xslparameter.responseXML
            };
			callback(state);
			
		}):(
		function(target,xmlparameter,xslparameter,nodes,callback) {

			if (isSettedXMLDocument(nodes.xmlnode)) {
				nodes.xmlnode.load(xmlparameter.responseXML);
			}

			if (isSettedXMLDocument(nodes.xslnode)) {
				nodes.xslnode.load(xslparameter.responseXML);
			}
			
        	var out = nodes.xmlnode.transformNode(nodes.xslnode.XMLDocument);
        	
        	if (target) target.html(out);

			var state = {
				resultDoc:out,
				xmlDoc:nodes.xmlnode.XMLDocument,
				xslDoc:nodes.xslnode.XMLDocument
		    };
			callback(state);

		});
}
		var transformer = new XSLTransformer(FOCS);
		
		// Browser different functions
var checkObjectType = (FOCS)?(
	function(object) {
		return object instanceof Object;
	}):(
	function(object) {
		return 	typeof object == "object";
	});
	
var setFromString = (FOCS)?(
	function(object,param,node){
		object.responseXML = new DOMParser().parseFromString(param, "text/xml");
		return object;
	}):(
	function(object,param,node){
		if (node.loadXML(param)) {
			object.responceXML = node.XMLDocument;
		}
		return object;	
	});
	
var includeElements = (FOCS)?(
	function(object1,object2){	
	}):(	
	function(object1,object2){
		$('body').append(object1).append(object2);
	});

var removeElements = (FOCS)?(
	function(object1,object2){
	}):(
	function(object1,object2){
		document.body.removeChild(object1);
		document.body.removeChild(object2);
	});

var makeNodes = (FOCS)?(
	function(){
		return {
			xmlnode:null,
			xslnode:null
		};
	}):(
	function(){
		return {
			xmlnode:document.createElement("xml"),
			xslnode:document.createElement("xml")
		};	
	});
var loadLocalForIE = (FOCS)?(
	function(){
		return initXML(0);
	}):(
	function(node,param,func) {
		var object = initXML(4);
		if (node.load(param)) {
			object.responceXML = node.XMLDocument;
			object.call = func;
		}
		return object;
	});
var callbackForLocal = (FOCS)?(
	function(){
	}):(
	function(object) {
		if (object.call) object.call();
	});
		
		// Inner util functions
/*builder-open key="base|ajax|full"*/
var normalizeCache = function(caching) {
		if (caching == null) {
	        return {
	        	"xml":false,
	        	"xsl":true,
	        	"result":false,
	        	"ajax":false
	        };
	    } else if (caching === true) {
	    	return {
	        	"xml":true,
	        	"xsl":true,
	        	"result":true,
	        	"ajax":true
	        };
	    }
		return caching;
	};
/*builder-close*/

/*builder-open key="local|full"*/
var trySetResultDoc = function(cache,value) {
		if (cache) {
			cache.lock();
			cache.reset();
			
			cache.setResultDoc(value);
			
			cache.unlock();
		}
	};
/*builder-close*/

var initXML = function (code) {
		return {
			readyState: code,
			getResponseHeader:function(header) {
				return null;
			}
	    };
	};

/*builder-open key="base|full"*/
var tryExtractFromCache = function(xml,caching,innerCache,target) {
		if (caching) {
			if (!checkObjectType(xml)) {
				var value = innerCache.getElement(xml);
				if (value) {
					debug(xml + " - already cached!",target);
					return value;
				}
			}	
		}
		return xml;
	};
	
var setIf = function(expression,trueValue,falseValue) {
		if (expression) {
			return trueValue;
		}
		return falseValue;
	};
/*builder-close*/

var setFromCache = function(object,param) {
		object.responseXML = param;
		return object;
	};
	
var getXMLRepresentation = function(object){
		return object.responseXML;
	};

/*builder-open key="ajax|full"*/
var checkByCache = function(cache,key) {
		if (cache) {
			return false;
		}
		return key;
	};
var checkByExpires = function(expires,key) {
		if (expires){
			if (expires > new Date()) {
				return false;
			} else {
				return true;
			}
		}
		return key;
	};
/*builder-close*/
	
var setFromFile = function(object,param,func,node){
		object = $.ajax({dataType: "xml", url: param, cache:false});
		if (object!=null) {
			object.onreadystatechange = func;
		} else {
			object = loadLocalForIE(node,param,func);
		}
		return object;
	};

var isSettedXMLDocument = function(node) {
		if (node.XMLDocument==null || node.XMLDocument.xml=='') {
			return true;
		}
		return false;
	};
	
var trySetToFixCache = function(key,xhr,uin,cache,postfix){
		if (key && xhr.readyState == completeValue) {
			cache.setElement(uin+postfix,xhr.responseXML);
		}
	};
	
var truncateXHR = function(xhr,uin,dnsCache,postfix) {
		var cache = xhr.getResponseHeader("Cache-control");
		var pragma = xhr.getResponseHeader("Pragma");
		var expires = xhr.getResponseHeader("Expires");
		return {
			responseXML:dnsCache.getElement(uin+postfix),
			getResponseHeader:function(header) {
				switch(header) {
					case "Cache-control":return cache; break;
					case "Pragma":return pragma; break;
					case "Expires":return expires; break;
					case "":return null; break;
					default:return null;
				}
			}
		};
	};
		
		// main context function
    	
    	var str = /^\s*</;
    	var completeValue = 4;
    	
    	$.fn.xslt = $.xslt = function(xml, xslt, callback, cache, caching) {
    		
    		var uin = new Date().getTime();
    		var target = ($.isFunction(this))?null:$(this);
    		
	        var transformed = false;
	        
	        /*builder-open key="base|ajax|full"*/
	        caching = normalizeCache(caching);
	        /*builder-close*/
	        
	        /*builder-open key="base|full"*/
	        var innerCache = baseCache;
	        /*builder-close*/
	        
	        /*builder-open key="ajax|full"*/
	        var netCache = ajaxCache;
	        /*builder-close*/
	        
	        var dnsCache = fixCache;
	        
	        /*builder-open key="base|full"*/
	        if (caching && caching.result) {
				if ((!checkObjectType(xml))&&(!checkObjectType(xslt))) {
					var value = innerCache.getElement(xml+"#"+xslt);
					if (value) {
						debug("Transforming result already cached!", target);
						
						if (target) target.html(value);
						
						/*builder-open key="local|full"*/
						trySetResultDoc(cache,value);
						/*builder-close*/
						call();
						
						if (target) return this;
						else return;
					}
				}	
			}
	        /*builder-close*/
	        
	        /*builder-open key="base|full"*/
	        // Inner cache keys
	        var cacheXMLKey = '';
	        var cacheXSLKey = '';
	        var cacheResultKey = '';
	        /*builder-close*/
	        
	        /*builder-open key="ajax|full"*/
	        // Inner cache ajax keys
	        var cacheXMLAKey = '';
	        var cacheXSLAKey = '';
	        /*builder-close*/
	        
	        // Ajax request keys for synchronization
	        var loadingXMLKey = false;
	        var loadingXSLKey = false;
	        
	        var xmlparameter = initXML(completeValue);
	    	var xslparameter = initXML(completeValue);
	        
			var nodes = makeNodes();
			includeElements(nodes.xmlnode,nodes.xslnode);
	        
			// Post calling functions
/*builder-open key="local|full"*/
function addToLocalCache(cache,state) {
	if (cache) {
        if (!cache.checkXmlDoc()) {
            cache.setXmlDoc(state.xmlDoc);
        }
        if (!cache.checkXslDoc()) {
            cache.setXslDoc(state.xslDoc);
        }
        if (!cache.checkResultDoc()) {
            cache.setResultDoc(state.resultDoc);
        }
		cache.unlock();
	}
}
/*builder-close*/

/*builder-open key="base|full"*/
function addToBaseCache(caching,state) {
	if (caching  && caching.xml) {
		if (cacheXMLKey!='') {
			var cacheXMLValue = state.xmlDoc;
			innerCache.setElement(cacheXMLKey,cacheXMLValue);
		}
	}
	if (caching  && caching.xsl) {
		if (cacheXSLKey!='') {
			var cacheXSLValue = state.xslDoc;
			innerCache.setElement(cacheXSLKey,cacheXSLValue);
		}
	}
	if (caching && caching.result) {
		if (cacheResultKey!='') {
			var cacheResultValue = state.resultDoc;
			innerCache.setElement(cacheResultKey,cacheResultValue);
		}
	}
}
/*builder-close*/


/*builder-open key="ajax|full"*/
function addToAjaxCache(xhr,caching,cacheKey,value) {
	if (caching && caching.ajax) {
		if (cacheKey!='') {
			
			function getHeader(xhr,header) {
				var value = xhr.getResponseHeader(header);
				if (value) {
					return value;
				}
				return null;
			}
			
			function canCache(cachedValue) {
				var result = 0;
				if (cachedValue.cache) {
					if (cachedValue.cache.indexOf("no-cache")<0 &&
						cachedValue.cache.indexOf("no-store")<0) {
						if (cachedValue.cache.indexOf("max-age")>0) {
							var time = cachedValue.cache.match(/max-age\s*=\s*(\d*)?/i);
							if (time[1]) {
								date = new Date().getTime() + (time[1]*1000);
								if (cachedValue.expires) {
									cachedValue.expires = new Date(Math.min(cachedValue.expires.getTime(),date));
								} else {
									cachedValue.expires = new Date(date);
								}
								result = 100;
							} else {
								result = 200;
								cachedValue.cache = null;
							}
						} else {
							result = 100;
						}
					} else {
						result = 300;
						cachedValue.cache = null;
					}
				}
				if (cachedValue.expires) {
					if (cachedValue.expires > new Date()) {
						result = result+10;
					} else {
						cachedValue.expires = null;
					}
				}
				if (result != 0 && result != 200 && result < 300) {
					return true;
				}
				return false;
			}
			
			var cachedValue = {
				expires:null,
				cache:null,
				value:null
			};
			
			cachedValue.cache = getHeader(xhr,"Cache-control");
			if (!cachedValue.cache) {
				cachedValue.cache = getHeader(xhr,"Pragma");
			}
			var expiresHeader = getHeader(xhr,"Expires");
			if (expiresHeader) {
				cachedValue.expires = new Date(expiresHeader);
			}

			if (canCache(cachedValue)) {
				cachedValue.value = value;
				debug(cacheKey+" added to ajax cache!");
				netCache.setElement(cacheKey,cachedValue);
			}
		}
	}
}
/*builder-close*/

function call() {
	if (callback) {
		setTimeout(function(){
			callback();
		},10);
	}
}
	    	
	    	var change = function() {
	    		
	    		loadingXMLKey = (!loadingXMLKey)?(xmlparameter.readyState == completeValue):true;
		        loadingXSLKey = (!loadingXSLKey)?(xslparameter.readyState == completeValue):true;
	    		
	    		trySetToFixCache(loadingXMLKey,xmlparameter,uin,dnsCache,"xml");
	    		trySetToFixCache(loadingXSLKey,xslparameter,uin,dnsCache,"xsl");
	    		
	    		if (loadingXMLKey && loadingXSLKey && !transformed) {
	    			
	    			xmlparameter = truncateXHR(xmlparameter,uin,dnsCache,"xml");
            		xslparameter = truncateXHR(xslparameter,uin,dnsCache,"xsl");
	    			
	        		transformer.calculate(target,xmlparameter,xslparameter,nodes,function(state){
	        			
	        			/*builder-open key="local|full"*/
	        			addToLocalCache(cache,state);
	        			/*builder-close*/
	        			
	        			/*builder-open key="base|full"*/
						addToBaseCache(caching,state);
						/*builder-close*/
						
						/*builder-open key="ajax|full"*/
						addToAjaxCache(xmlparameter,caching,cacheXMLAKey,state.xmlDoc);
						addToAjaxCache(xslparameter,caching,cacheXSLAKey,state.xslDoc);
						/*builder-close*/
						
						removeElements(nodes.xmlnode,nodes.xslnode);
						
						call();
						
	        		});
					transformed = true;
	        	}
	    	};
	        
	    	/*builder-open key="local|full"*/
	        if (cache) {
				cache.lock();
				cache.reset();
			}
	        /*builder-close*/

	        /*builder-open key="base|full"*/
			xml = tryExtractFromCache(xml,(caching && caching.xml),innerCache,target);
			/*builder-close*/
			
			if (checkObjectType(xml)) {
				xmlparameter = setFromCache(xmlparameter,xml);
	        } else if (str.test(xml)) {
	        	xmlparameter = setFromString(xmlparameter,xml,nodes.xmlnode);
	        	
	        	/*builder-open key="local|full"*/
				if (cache) {
			       	cache.setXmlDoc(getXMLRepresentation(xmlparameter));
			    }
				/*builder-close*/
				
				/*builder-open key="base|full"*/
				cacheXMLKey = setIf(caching && caching.xml,xml,'');
				/*builder-close*/
				
	    	} else {
	    		
	    		/*builder-open key="base|full"*/
	    		cacheXMLKey = setIf(caching && caching.xml,xml,'');
	    		/*builder-close*/
	    		
	    		/*builder-open key="ajax|full"*/
	    		var value = false;
		    	var uploadKey = true;
		    	if (caching && caching.ajax) {
        			cacheXMLAKey = xml;
        			value = netCache.getElement(cacheXMLAKey);
        			if (value) {
        				uploadKey = checkByCache(value.cache,uploadKey);
        				uploadKey = checkByExpires(value.expires,uploadKey);
        				if (!uploadKey) {
        					debug("Ajax resource (" + xml + ") - already cached!",target);
        					xmlparameter.responseXML = value.value;
        				}
        			}
    			}
		    	if (!value || uploadKey) {
		    	/*builder-close*/
		    		
    				xmlparameter = setFromFile(xmlparameter,xml,change,nodes.xmlnode);
    				
    			/*builder-open key="ajax|full"*/
    			}
		    	/*builder-close*/
		    	
	    	}
			
			/*builder-open key="base|full"*/
			xslt = tryExtractFromCache(xslt,(caching && caching.xsl),innerCache,target);
			/*builder-close*/
			
			if (checkObjectType(xslt)) {
				xslparameter = setFromCache(xslparameter,xslt);
				change();
		    } else if (str.test(xslt)) {
		    	xslparameter = setFromString(xslparameter,xslt,nodes.xslnode);
		    	
		    	/*builder-open key="local|full"*/
				if (cache) {
		        	cache.setXslDoc(getXMLRepresentation(xslparameter));
		        }
				/*builder-close*/
				
				/*builder-open key="base|full"*/
				cacheXSLKey = setIf(caching && caching.xsl,xslt,'');
				cacheResultKey = setIf(caching && caching.result,xml+"#"+xslt,'');
				/*builder-close*/
				
				change();
		    } else {
		    	/*builder-open key="base|full"*/
		    	cacheXSLKey = setIf(caching && caching.xsl,xslt,'');
		    	cacheResultKey = setIf(caching && caching.result,xml+"#"+xslt,'');
		    	/*builder-close*/
		    	
		    	/*builder-open key="ajax|full"*/
		    	var value = false;
		    	var uploadKey = true;
		    	if (caching && caching.ajax) {
        			cacheXSLAKey = xslt;
        			value = netCache.getElement(cacheXSLAKey);
        			if (value) {
        				uploadKey = checkByCache(value.cache,uploadKey);
        				uploadKey = checkByExpires(value.expires,uploadKey);
        				if (!uploadKey) {
        					debug("Ajax resource (" + xslt + ") - already cached!",target);
        					xslparameter.responseXML = value.value;
        					change();
        				}
        			}
    			}
		    	if (!value || uploadKey) {
		    	/*builder-close*/
		    		
    				xslparameter = setFromFile(xslparameter,xslt,change,nodes.xslnode);
    				callbackForLocal(xslparameter);
    				
    			/*builder-open key="ajax|full"*/
    			}
		    	/*builder-close*/
		    	
		    }
			
			if (target) return this;
			else return;
		};
	}

})(jQuery);
