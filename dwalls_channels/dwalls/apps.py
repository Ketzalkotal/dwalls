from django.apps import AppConfig


class DwallsConfig(AppConfig):
    name = 'dwalls'

    def ready(self):
        import dwalls.signals
