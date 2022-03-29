from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea

# Register your models here.
# class UserAdminConfig(UserAdmin):
#     model = User
#     search_fields = ('email', 'firstname',)
#     list_filter = ('email', 'firstname', 'is_active', 'is_staff')
#     ordering = ('start_date',)
#     list_display = ('email', 'firstname', 'lastname', 'is_active', 'is_staff')

#     fieldsets = (
#         (None, {'fields' : ('email', 'firstname', )}),
#         ('Permissions', {'fields': ('is_staff', 'is_active')}),
#         ('Personal', {'fields': ('about',)}),
#     )
#     formfield_overrides = {
#         User.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
#     }
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'firstname', 'password1', 'password2', 'is_active', 'is_staff')}
#          ),
#     )

admin.site.register(User)
