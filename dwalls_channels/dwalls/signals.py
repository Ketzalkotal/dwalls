from django.contrib.auth import user_logged_in, user_logged_out
from django.dispatch import receiver
from dwalls.models.account import Account

@receiver(user_logged_in)
def on_user_login(sender, **kwargs):
    account = Account.objects.get(user=kwargs.get('user'))
    account.logged_in = True
    account.save()


@receiver(user_logged_out)
def on_user_logout(sender, **kwargs):
    try:
        account = Account.objects.get(user=kwargs.get('user'))
        account.logged_in = False
        account.save()
    except:
        pass

