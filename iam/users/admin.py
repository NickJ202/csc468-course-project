from django.contrib import admin
from .models import newUser
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea

# Register your models here.
class UserAdminConfig(UserAdmin):
    model = newUser
    search_fields = ('email', 'username', 'firstname',)
    list_filter = ('email', 'username', 'firstname', 'is_active', 'is_staff')
    ordering = ('start_date',)
    list_display = ('email', 'username', 'firstname', 'lastname', 'is_active', 'is_staff')

    fieldsets = (
        (None, {'fields' : ('email', 'username', 'firstname', )}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        newUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'firstname', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )

admin.site.register(newUser, UserAdminConfig)
