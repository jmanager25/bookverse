# Generated by Django 3.2.20 on 2023-08-20 15:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='book',
            options={'ordering': ['-created_at']},
        ),
    ]
