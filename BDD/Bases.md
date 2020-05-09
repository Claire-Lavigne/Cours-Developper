# CRUD
|||
|create|post|
|read|get|
|update|put|
|delete|delete|

# Path
- verb/URI? => versionning / filter
- verb/URI?search
- verb/URI?sort
- verb/URI?page

# HTTP Response Code

|**100**|Informational|
|**200**|Success|
|201|Success : Created|
|**300**|Redirection|
|301|Permanent Redirection|
|301|Temporary Redirection|
|**400**|Client Error : Wrong Request|
|401|Client Error : Not Authorized|
|403|Client Error : Access Denied|
|404|Client Error : Not found|
|**500**|Server error|
|503|Server error|
|504|Server didn't answer|
