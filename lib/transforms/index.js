// WARNING: This is an auto-generated file.

exports["bitbucketListRepos"] = {
    "alias": [
        "bitbucket_list_repos",
        "bblr"
    ],
    "title": "List Bitbucket Repos",
    "description": "List Bitbucket repositories.",
    "group": "List Bitbucket Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListRepos"].load = function() { return require("./bitbucket")["bitbucketListRepos"] }


exports["bitbucketListSnippets"] = {
    "alias": [
        "bitbucket_list_snippets",
        "bbls"
    ],
    "title": "List Bitbucket Snippets",
    "description": "List Bitbucket snippets.",
    "group": "List Bitbucket Snippets",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListSnippets"].load = function() { return require("./bitbucket")["bitbucketListSnippets"] }


exports["bitbucketListTeamRepos"] = {
    "alias": [
        "bitbucket_list_team_repos",
        "bbltr"
    ],
    "title": "List Bitbucket Team Repos",
    "description": "List Bitbucket team repos.",
    "group": "List Bitbucket Team Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListTeamRepos"].load = function() { return require("./bitbucket")["bitbucketListTeamRepos"] }


exports["bitbucketListTeamMembers"] = {
    "alias": [
        "bitbucket_list_team_members",
        "bbltm"
    ],
    "title": "List Bitbucket Team Members",
    "description": "List Bitbucket team members.",
    "group": "List Bitbucket Team Members",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "bitbucket:member"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["bitbucketListTeamMembers"].load = function() { return require("./bitbucket")["bitbucketListTeamMembers"] }

exports["bufferoverrunSubdomainSearch"] = {
    "alias": [
        "bufferoverrun_subdomain_search",
        "brss"
    ],
    "title": "Bufferover.run Subdomain Search",
    "description": "Obtain a list of subdomains using bufferover.run DNS service",
    "group": "Bufferover.run Subdomain Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "extractIps": {
            "description": "Extract IPs",
            "type": "boolean",
            "default": false
        }
    },
    "priority": 1,
    "noise": 1
}

exports["bufferoverrunSubdomainSearch"].load = function() { return require("./bufferoverrun")["bufferoverrunSubdomainSearch"] }

exports["certspotterIssuances"] = {
    "alias": [
        "certspotter_issuances",
        "csi"
    ],
    "title": "Certspotter Issuances",
    "description": "Obtain issuances from Certspotter.",
    "group": "Certspotter Issuances",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["certspotterIssuances"].load = function() { return require("./certspotter")["certspotterIssuances"] }

exports["cloudflareDnsQuery"] = {
    "alias": [
        "cloudflare_dns_query",
        "cfdq"
    ],
    "title": "CloudFlare DNS Query",
    "description": "Query CloudFlare DNS API.",
    "group": "CloudFlare DNS Query",
    "tags": [
        "ce",
        "dns"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {
        "type": {
            "description": "Record type",
            "type": "string",
            "default": "ALL",
            "choices": [
                "ALL",
                "A",
                "AAAA",
                "CNAME",
                "MX",
                "NS",
                "TXT"
            ]
        }
    },
    "priority": 1,
    "noise": 1
}

exports["cloudflareDnsQuery"].load = function() { return require("./cloudflare")["cloudflareDnsQuery"] }

exports["crtshCNDomainReport"] = {
    "alias": [
        "crtsh_cn_domain_report",
        "crtshcdr"
    ],
    "title": "CRT.SH CN Domain Report",
    "description": "Obtain crt.sh domain report which helps enumerating potential target subdomains.",
    "group": "CRT.SH CN Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["crtshCNDomainReport"].load = function() { return require("./crtsh")["crtshCNDomainReport"] }


exports["crtshSANDomainReport"] = {
    "alias": [
        "crtsh_san_domain_report",
        "crtshsdr"
    ],
    "title": "CRT.SH SAN Domain Report",
    "description": "Obtain crt.sh domain report which helps enumerating potential target subdomains.",
    "group": "CRT.SH SAN Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["crtshSANDomainReport"].load = function() { return require("./crtsh")["crtshSANDomainReport"] }

exports["dnsResolve"] = {
    "alias": [
        "dns_resolve",
        "dr",
        "dns"
    ],
    "title": "DNS Resolve",
    "description": "Performs DNS resolution",
    "group": "DNS Resolve",
    "tags": [
        "ce",
        "local",
        "dns"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {
        "type": {
            "description": "Record type",
            "type": "string",
            "default": "ALL",
            "choices": [
                "ALL",
                "A",
                "AAAA",
                "CNAME",
                "MX",
                "NS",
                "TXT"
            ]
        },
        "servers": {
            "description": "DNS servers",
            "type": "string",
            "default": ""
        }
    },
    "priority": 1,
    "noise": 1
}

exports["dnsResolve"].load = function() { return require("./dns")["dnsResolve"] }

exports["dockerhubListRepos"] = {
    "alias": [
        "dockerhub_list_repos",
        "dhlr"
    ],
    "title": "List DockerHub Repos",
    "description": "List DockerHub repositories for a given member or org.",
    "group": "List DockerHub Repos",
    "tags": [
        "ce"
    ],
    "types": [
        "brand"
    ],
    "options": {
        "dockerhubKey": {
            "description": "DockerHub API Key",
            "type": "string"
        },
        "count": {
            "description": "Results per page",
            "type": "number",
            "default": 100
        },
        "pages": {
            "description": "Number of pages",
            "type": "number"
        }
    },
    "priority": 1,
    "noise": 1
}

exports["dockerhubListRepos"].load = function() { return require("./dockerhub")["dockerhubListRepos"] }

exports["gravatar"] = {
    "alias": [],
    "title": "Gravatar",
    "description": "Get gravatar.",
    "group": "Gravatar",
    "tags": [
        "ce"
    ],
    "types": [
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["gravatar"].load = function() { return require("./gravatar")["gravatar"] }

exports["hackertargetReverseIpLookup"] = {
    "alias": [
        "hackertarget_reverse_ip_lookup",
        "htril"
    ],
    "title": "HackerTarget Reverse IP Lookup",
    "description": "Obtain reverse IP information from hackertarget.com.",
    "group": "HackerTarget Reverse IP Lookup",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {
        "noiseThreshold": {
            "description": "The number of minimum nodes before considering the result set as noise",
            "type": "number",
            "default": 100
        }
    },
    "priority": 100,
    "noise": 9
}

exports["hackertargetReverseIpLookup"].load = function() { return require("./hackertarget")["hackertargetReverseIpLookup"] }


exports["hackertargetOnlinePortScan"] = {
    "alias": [
        "hackertarget_online_port_scan",
        "htps"
    ],
    "title": "HackerTarget Online Port Scan",
    "description": "Obtain port information from hackertarget.com.",
    "group": "HackerTarget Online Port Scan",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "ipv4",
        "ipv6"
    ],
    "options": {},
    "priority": 100,
    "noise": 1
}

exports["hackertargetOnlinePortScan"].load = function() { return require("./hackertarget")["hackertargetOnlinePortScan"] }

exports["httpFingerprint"] = {
    "alias": [
        "http_fingerprint",
        "hf"
    ],
    "title": "HTTP Fingerprint",
    "description": "Performs a fingerprint on the HTTP server and application.",
    "group": "HTTP Fingerprint",
    "tags": [
        "ce",
        "local",
        "http"
    ],
    "types": [
        "uri"
    ],
    "options": {
        "timeout": {
            "description": "HTTP timeout interval",
            "type": "number",
            "default": 30000
        },
        "follow": {
            "description": "Follow redirects",
            "type": "boolean",
            "default": false
        },
        "augment": {
            "description": "Augment input node with result nodes",
            "type": "boolean",
            "default": true
        },
        "defuse": {
            "description": "Prevention extraction of sub types",
            "type": "boolean",
            "default": false
        },
        "responseBodySniffSize": {
            "description": "The size of the response body sniff",
            "type": "number",
            "default": 512
        }
    },
    "priority": 1,
    "noise": 1
}

exports["httpFingerprint"].load = function() { return require("./http")["httpFingerprint"] }

exports["ipinfoioWidgetSearch"] = {
    "alias": [
        "ipinfoio_widget_search",
        "iiiows"
    ],
    "title": "ipinfo.io widget search",
    "description": "Obtain ipinfo.io whois report via the web widget.",
    "group": "ipinfo.io widget search",
    "tags": [
        "ce"
    ],
    "types": [
        "ipv4"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["ipinfoioWidgetSearch"].load = function() { return require("./ipinfoio")["ipinfoioWidgetSearch"] }

exports["OmnisintSubdomainReport"] = {
    "alias": [
        "omnisint_subdomain_report"
    ],
    "title": "Omnisint Subdomain Report",
    "description": "Obtain omnisint domain report which helps enumerating target subdomains.",
    "group": "Omnisint Subdomain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["OmnisintSubdomainReport"].load = function() { return require("./omnisint")["OmnisintSubdomainReport"] }

exports["pksLookupKeys"] = {
    "alias": [
        "pks_lookup_keys",
        "pkslk"
    ],
    "title": "PKS Lookup",
    "description": "Look the the PKS database at pool.sks-keyservers.net which pgp.mit.edu is part of.",
    "group": "PKS Lookup",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["pksLookupKeys"].load = function() { return require("./pks")["pksLookupKeys"] }

exports["pwndbSearch"] = {
    "alias": [
        "pwndb_search",
        "pds"
    ],
    "title": "PwnDB Search",
    "description": "Searching the PwnDB database",
    "group": "PwnDB Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["pwndbSearch"].load = function() { return require("./pwndb")["pwndbSearch"] }

exports["riddlerIpSearch"] = {
    "alias": [
        "riddler_ip_search",
        "rdis"
    ],
    "title": "Riddler IP Search",
    "description": "Searches for IP references using F-Secure riddler.io.",
    "group": "Riddler IP Search",
    "tags": [
        "ce"
    ],
    "types": [
        "ipv4",
        "ipv6"
    ],
    "options": {
        "ignoreDomains": {
            "description": "Ignore the provided domains",
            "type": "boolean",
            "default": true
        }
    },
    "priority": 1,
    "noise": 1
}

exports["riddlerIpSearch"].load = function() { return require("./riddler")["riddlerIpSearch"] }


exports["riddlerDomainSearch"] = {
    "alias": [
        "riddler_domain_search",
        "rdds"
    ],
    "title": "Riddler Domain Search",
    "description": "Searches for Domain references using F-Secure riddler.io.",
    "group": "Riddler Domain Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "ignoreIps": {
            "description": "Ignore the provided IPs",
            "type": "boolean",
            "default": true
        }
    },
    "priority": 1,
    "noise": 1
}

exports["riddlerDomainSearch"].load = function() { return require("./riddler")["riddlerDomainSearch"] }

exports["script"] = {
    "alias": [
        "script"
    ],
    "title": "Script",
    "description": "Perform transformation with external script",
    "group": "Script",
    "tags": [
        "ce",
        "evil",
        "local"
    ],
    "types": [],
    "options": {
        "script": {
            "type": "string",
            "description": "The path to the script to execute.",
            "default": ""
        },
        "arg": {
            "type": "array",
            "description": "List of arguments to pass to the script function.",
            "default": []
        }
    },
    "priority": 100,
    "noise": 100
}

exports["script"].load = function() { return require("./script")["script"] }

exports["scyllaSearch"] = {
    "alias": [
        "scylla_search",
        "scys"
    ],
    "title": "Scylla Search",
    "description": "Searching the Scylla database",
    "group": "Scylla Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain",
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["scyllaSearch"].load = function() { return require("./scylla")["scyllaSearch"] }

exports["securitytrailsSuggestions"] = {
    "alias": [
        "securitytrails_domain_suggestions",
        "stds"
    ],
    "title": "Security Trails Domain Suggestions",
    "description": "Get a list of domain suggestions from securitytrails.com.",
    "group": "Security Trails Domain Suggestions",
    "tags": [
        "ce"
    ],
    "types": [
        "brand"
    ],
    "options": {},
    "priority": 1,
    "noise": 9
}

exports["securitytrailsSuggestions"].load = function() { return require("./securitytrails")["securitytrailsSuggestions"] }

exports["shodanOrgSearch"] = {
    "alias": [
        "shodan_org_search",
        "sos"
    ],
    "title": "Shodan ORG Search",
    "description": "Performs search using ORG filter.",
    "group": "Shodan ORG Search",
    "tags": [
        "ce"
    ],
    "types": [
        "brand",
        "org"
    ],
    "options": {
        "shodanKey": {
            "type": "string",
            "description": "Shodan API key."
        },
        "extraQuery": {
            "type": "string",
            "description": "Extra query."
        },
        "pages": {
            "type": "number",
            "description": "Number of pages.",
            "default": Infinity
        },
        "extractIps": {
            "type": "boolean",
            "description": "Extract IP nodes.",
            "default": false,
            "alias": [
                "ips",
                "extractIp",
                "ip"
            ]
        },
        "extractPorts": {
            "type": "boolean",
            "description": "Extract port nodes.",
            "default": false,
            "alias": [
                "ports",
                "extractPort",
                "port"
            ]
        },
        "extractHostnames": {
            "type": "boolean",
            "description": "Extract hostname nodes.",
            "default": false,
            "alias": [
                "hostnames",
                "extractHostname",
                "hostname"
            ]
        }
    },
    "priority": 1,
    "noise": 50
}

exports["shodanOrgSearch"].load = function() { return require("./shodan")["shodanOrgSearch"] }


exports["shodanSslSearch"] = {
    "alias": [
        "shodan_ssl_search",
        "sss"
    ],
    "title": "Shodan SSL Search",
    "description": "Performs search using SSL filter.",
    "group": "Shodan SSL Search",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "shodanKey": {
            "type": "string",
            "description": "Shodan API key."
        },
        "extraQuery": {
            "type": "string",
            "description": "Extra query."
        },
        "pages": {
            "type": "number",
            "description": "Number of pages.",
            "default": Infinity
        },
        "extractIps": {
            "type": "boolean",
            "description": "Extract IP nodes.",
            "default": false,
            "alias": [
                "ips",
                "extractIp",
                "ip"
            ]
        },
        "extractPorts": {
            "type": "boolean",
            "description": "Extract port nodes.",
            "default": false,
            "alias": [
                "ports",
                "extractPort",
                "port"
            ]
        },
        "extractHostnames": {
            "type": "boolean",
            "description": "Extract hostname nodes.",
            "default": false,
            "alias": [
                "hostnames",
                "extractHostname",
                "hostname"
            ]
        }
    },
    "priority": 1,
    "noise": 9
}

exports["shodanSslSearch"].load = function() { return require("./shodan")["shodanSslSearch"] }

exports["spyseSubdomains"] = {
    "alias": [
        "spyse_subdomains",
        "ssds"
    ],
    "title": "Spyse Subdomains",
    "description": "Performs subdomain searching with Spyse.",
    "group": "Spyse Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "spyseKey": {
            "type": "string",
            "description": "Spyse API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["spyseSubdomains"].load = function() { return require("./spyse")["spyseSubdomains"] }

exports["tcpPortScan"] = {
    "alias": [
        "tcp_port_scan",
        "tps"
    ],
    "title": "TCP Port Scan",
    "description": "Simple, full-handshake TCP port scanner (very slow and sometimes inaccurate)",
    "group": "TCP Port Scan",
    "tags": [
        "ce",
        "local",
        "tcp"
    ],
    "types": [
        "ipv4",
        "ipv6"
    ],
    "options": {
        "ports": {
            "description": "The ports to scan for",
            "type": "string",
            "default": ""
        },
        "timeout": {
            "description": "The socket timeout interval",
            "type": "number",
            "default": 5000
        },
        "concurrency": {
            "description": "Number of concurrent scans",
            "type": "number",
            "default": 500
        },
        "validates": {
            "description": "Validate port",
            "type": "boolean",
            "default": false,
            "alias": [
                "validate"
            ]
        },
        "beSmart": {
            "description": "Use smart detection",
            "type": "boolean",
            "default": false,
            "alias": [
                "smart"
            ]
        },
        "withBanners": {
            "description": "Fetch banner",
            "type": "boolean",
            "default": false,
            "alias": [
                "with-banner",
                "banners",
                "banner"
            ]
        },
        "withCertificates": {
            "description": "Fetch certificate",
            "type": "boolean",
            "default": false,
            "alias": [
                "with-certificate",
                "certificates",
                "certificate"
            ]
        }
    },
    "priority": 1,
    "noise": 1
}

exports["tcpPortScan"].load = function() { return require("./tcp")["tcpPortScan"] }

exports["threatcrowdDomainReport"] = {
    "alias": [
        "threatcrowd_domain_report",
        "tcdr"
    ],
    "title": "Threatcrowd Domain Report",
    "description": "Obtain threatcrowd domain report which helps enumerating potential target subdomains and email addresses.",
    "group": "Threatcrowd Domain Report",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["threatcrowdDomainReport"].load = function() { return require("./threatcrowd")["threatcrowdDomainReport"] }


exports["threatcrowdIpReport"] = {
    "alias": [
        "threatcrowd_ip_report",
        "tcir"
    ],
    "title": "Threatcrowd IP Report",
    "description": "Obtain threatcrowd ip report which helps enumerating virtual hosts.",
    "group": "Threatcrowd IP Report",
    "tags": [
        "ce"
    ],
    "types": [
        "ipv4",
        "ipv6"
    ],
    "options": {}
}

exports["threatcrowdIpReport"].load = function() { return require("./threatcrowd")["threatcrowdIpReport"] }

exports["urlscanLiveshot"] = {
    "alias": [
        "urlscan_liveshot",
        "usls"
    ],
    "title": "Urlscan Liveshot",
    "description": "Generates a liveshot of any public site via urlscan.",
    "group": "Urlscan Liveshot",
    "tags": [
        "ce"
    ],
    "types": [
        "uri"
    ],
    "options": {
        "mix": {
            "description": "Mix input nodes with result nodes",
            "type": "boolean",
            "default": true
        }
    },
    "priority": 1,
    "noise": 1
}

exports["urlscanLiveshot"].load = function() { return require("./urlscan")["urlscanLiveshot"] }


exports["urlscanSubdomains"] = {
    "alias": [
        "urlscan_subdomains",
        "uss"
    ],
    "title": "Urlscan Subdomains",
    "description": "Find subdomains via urlscan.",
    "group": "Urlscan Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "urlscanKey": {
            "type": "string",
            "description": "Urlscan API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["urlscanSubdomains"].load = function() { return require("./urlscan")["urlscanSubdomains"] }

exports["noop"] = {
    "alias": [
        "nop"
    ],
    "title": "No Op",
    "description": "Does not do anything.",
    "group": "No Op",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["noop"].load = function() { return require("./utils")["noop"] }


exports["sleep"] = {
    "alias": [
        "sleep",
        "wait"
    ],
    "title": "Sleep",
    "description": "Sleeps for predefined time.",
    "group": "Sleep",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [],
    "options": {
        "time": {
            "type": "number",
            "description": "The ammount of time to sleep in milliseconds.",
            "default": 60000
        }
    },
    "priority": 100,
    "noise": 100
}

exports["sleep"].load = function() { return require("./utils")["sleep"] }


exports["duplicate"] = {
    "alias": [
        "dup"
    ],
    "title": "Duplicate",
    "description": "Duplicate node.",
    "group": "Duplicate",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["duplicate"].load = function() { return require("./utils")["duplicate"] }


exports["extract"] = {
    "alias": [
        "excavate"
    ],
    "title": "Extract",
    "description": "Extract property.",
    "group": "Extract",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "property": {
            "type": "string",
            "description": "The property to extract.",
            "default": ""
        },
        "prefix": {
            "type": "string",
            "description": "Prefix for the label.",
            "default": ""
        },
        "suffix": {
            "type": "string",
            "description": "Suffix for the label.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["extract"].load = function() { return require("./utils")["extract"] }


exports["prefix"] = {
    "alias": [
        "prepand"
    ],
    "title": "Prefix",
    "description": "Creates a new node with a prefix.",
    "group": "Prefix",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "prefix": {
            "type": "string",
            "description": "The prefix to add.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["prefix"].load = function() { return require("./utils")["prefix"] }


exports["suffix"] = {
    "alias": [
        "append"
    ],
    "title": "Suffix",
    "description": "Creates a new node with a suffix.",
    "group": "Suffix",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "suffix": {
            "type": "string",
            "description": "The suffix to add.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["suffix"].load = function() { return require("./utils")["suffix"] }


exports["augment"] = {
    "alias": [],
    "title": "Augment",
    "description": "Update node with prefix or suffix.",
    "group": "Augment",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "*"
    ],
    "options": {
        "prefix": {
            "type": "string",
            "description": "The prefix to add.",
            "default": ""
        },
        "suffix": {
            "type": "string",
            "description": "The suffix to add.",
            "default": ""
        },
        "newType": {
            "type": "string",
            "description": "Type of the new node.",
            "default": "string"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["augment"].load = function() { return require("./utils")["augment"] }


exports["splitEmail"] = {
    "alias": [
        "split_email"
    ],
    "title": "Split Email",
    "description": "Split email at the @ sign.",
    "group": "Split Email",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "email"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["splitEmail"].load = function() { return require("./utils")["splitEmail"] }


exports["buildEmail"] = {
    "alias": [
        "build_email"
    ],
    "title": "Build Email",
    "description": "Build email from node label.",
    "group": "Build Email",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "nick": {
            "type": "string",
            "description": "The email nick.",
            "default": "admin"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["buildEmail"].load = function() { return require("./utils")["buildEmail"] }


exports["splitDomain"] = {
    "alias": [
        "split_domain"
    ],
    "title": "Split Domain",
    "description": "Split domain at the first . sign.",
    "group": "Split Domain",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["splitDomain"].load = function() { return require("./utils")["splitDomain"] }


exports["buildDomain"] = {
    "alias": [
        "build_domain"
    ],
    "title": "Build Domain",
    "description": "Build domain from node label.",
    "group": "Build Domain",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "brand": {
            "type": "string",
            "description": "The brand",
            "default": "brand"
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["buildDomain"].load = function() { return require("./utils")["buildDomain"] }


exports["splitUri"] = {
    "alias": [
        "split_uri"
    ],
    "title": "Split URI",
    "description": "Split URI to corresponding parts.",
    "group": "Split URI",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "uri"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["splitUri"].load = function() { return require("./utils")["splitUri"] }


exports["buildUri"] = {
    "alias": [
        "build_uri"
    ],
    "title": "Build URI",
    "description": "Build URI from node label.",
    "group": "Build URI",
    "tags": [
        "ce",
        "offline"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "protocol": {
            "type": "string",
            "description": "The URI protocol.",
            "default": "http"
        },
        "port": {
            "type": "string",
            "description": "The URI port.",
            "default": ""
        }
    },
    "priority": 1,
    "noise": 1000
}

exports["buildUri"].load = function() { return require("./utils")["buildUri"] }


exports["bakeImages"] = {
    "alias": [
        "bake_images",
        "bes"
    ],
    "title": "Bake Images",
    "description": "Convert external image into data URIs for self-embedding purposes.",
    "group": "Bake Images",
    "tags": [
        "ce"
    ],
    "types": [
        "image",
        "screenshot",
        "gravatar"
    ],
    "options": {},
    "priority": 1,
    "noise": 1000
}

exports["bakeImages"].load = function() { return require("./utils")["bakeImages"] }

exports["virustotalSubdomains"] = {
    "alias": [
        "virustotal_subdomains",
        "vtsd"
    ],
    "title": "Virustotal Subdomains",
    "description": "Obtain subdomains from Virustotal.",
    "group": "Virustotal Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {},
    "priority": 1,
    "noise": 1
}

exports["virustotalSubdomains"].load = function() { return require("./virustotal")["virustotalSubdomains"] }

exports["vulnersSearch"] = {
    "alias": [
        "vulners_search",
        "vs"
    ],
    "title": "Vulners Search",
    "description": "Obtain vulnerability information via vulners.com.",
    "group": "Vulners Search",
    "tags": [
        "ce"
    ],
    "types": [
        "software"
    ],
    "options": {
        "family": {
            "description": "Bulletin family",
            "type": "string",
            "default": "",
            "choices": [
                "",
                "exploit",
                "nvd"
            ]
        }
    },
    "priority": 1,
    "noise": 1
}

exports["vulnersSearch"].load = function() { return require("./vulners")["vulnersSearch"] }

exports["wappalyzerProfile"] = {
    "alias": [
        "wappalyzer_profile",
        "wzp"
    ],
    "title": "Wappalyzer Profile",
    "description": "Enumerate technologies with api.wappalyzer.com.",
    "group": "Wappalyzer Profile",
    "tags": [
        "ce"
    ],
    "types": [
        "uri"
    ],
    "options": {
        "wappalyzerKey": {
            "type": "string",
            "description": "Shodan API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["wappalyzerProfile"].load = function() { return require("./wappalyzer")["wappalyzerProfile"] }

exports["worker"] = {
    "alias": [
        "worker"
    ],
    "title": "Worker",
    "description": "Perform transformation with external worker",
    "group": "Worker",
    "tags": [
        "ce",
        "evil",
        "local"
    ],
    "types": [],
    "options": {
        "worker": {
            "type": "string",
            "description": "The path to the worker to execute.",
            "default": ""
        },
        "arg": {
            "type": "array",
            "description": "List of arguments to pass to the worker function.",
            "default": []
        },
        "perNode": {
            "type": "boolean",
            "description": "Run new worker per node.",
            "default": false
        }
    },
    "priority": 100,
    "noise": 100
}

exports["worker"].load = function() { return require("./worker")["worker"] }

exports["zonecruncherSubdomains"] = {
    "alias": [
        "zonecruncher_subdomains",
        "zcss"
    ],
    "title": "Zonecruncher Subdomains",
    "description": "Performs subdomain searching with Zonecruncher.",
    "group": "Zonecruncher Subdomains",
    "tags": [
        "ce"
    ],
    "types": [
        "domain"
    ],
    "options": {
        "zonecruncherKey": {
            "type": "string",
            "description": "Zonecruncher API key."
        }
    },
    "priority": 1,
    "noise": 1
}

exports["zonecruncherSubdomains"].load = function() { return require("./zonecruncher")["zonecruncherSubdomains"] }
