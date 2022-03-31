# Generated by Django 4.0.3 on 2022-03-31 21:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('phone', models.CharField(max_length=150)),
                ('is_organizer', models.BooleanField(default=False)),
                ('is_attendee', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address_1', models.CharField(max_length=1024)),
                ('address_2', models.CharField(max_length=1024)),
                ('postal_code', models.CharField(max_length=300)),
                ('locality', models.CharField(max_length=300)),
                ('state', models.CharField(max_length=300)),
                ('country', models.CharField(max_length=300)),
                ('name', models.CharField(max_length=150)),
                ('phone', models.CharField(max_length=150)),
                ('contact', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contact', to=settings.AUTH_USER_MODEL)),
                ('members', models.ManyToManyField(related_name='members', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('startTime', models.TimeField()),
                ('endTime', models.TimeField()),
                ('tag', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('attendees', models.ManyToManyField(related_name='attendees', to=settings.AUTH_USER_MODEL)),
                ('organizer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.organization')),
            ],
        ),
    ]
