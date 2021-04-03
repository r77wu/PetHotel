# Generated by Django 3.1.7 on 2021-03-15 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='role',
            field=models.PositiveSmallIntegerField(choices=[(1, 'Customer'), (2, 'Employee')], default=1),
        ),
    ]
