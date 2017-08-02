from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from example.signals import on_user_logout

class LogoutSignalTest(TestCase):

    def setUp(self):
        self.client = Client()
        User = get_user_model()
        self.user = User.objects.create_user('ketzalkotal', password='atestpassword')

    def test_on_logout_idempotency(self):
        # I hit the logout button without being logged in
        # and crashed the site
        self.client.logout()

