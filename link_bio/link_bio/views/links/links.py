import reflex as rx
from link_bio.components.link_button import link_button

def links()->rx.Component:
    return rx.vstack(
        link_button("Twitch","https://www.twitch.tv/mouredev"),
        link_button("YouTube","https://www.youtube.com/@mouredev"),
        link_button("Youtube (Canal secundario)","https://www.youtube.com/@mouredevtv"),
        link_button("Discord","https://www.mouredev.com/discord")
    )