@!/usr/cfg/bin ices

@packages.usr-define
- all

@exe.ices
- all 'access-level cmd'

# register custom command
@register.private-command
 - packages.handle
 method - ices.exe
