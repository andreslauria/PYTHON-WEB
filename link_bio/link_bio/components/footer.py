import reflex as rx
import datetime

def footer()->rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link("© 2014-2023 MOUREDEV BY BRAIS MOURE V3.", href="https://mouredev.com"),
        rx.text(" BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.")
    )