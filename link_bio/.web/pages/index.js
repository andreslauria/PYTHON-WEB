import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <VStack>
  <Stack sx={{"position": "sticky", "bg": "blue", "paddingX": "16px", "paddingY": "8px", "zIndex": "99"}}>
  <Text sx={{"height": "40px"}}>
  {`mouredev`}
</Text>
</Stack>
  <VStack>
  <Avatar name={`Brais Moure`} size={`xl`}/>
  <Text>
  {`@mouredev`}
</Text>
  <Text>
  {`HOLA 👋🏼 MI NOMBRE ES BRAIS MOURE`}
</Text>
  <Text>
  {`Soy ingeniero de software desde hace más de 12 años. 
                Actualmente trabajo como freelance full-stack developer iOS y Android. 
                Además creo contenido formativo sobre programación y tecnología en redes.
                Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!`}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://www.twitch.tv/mouredev`} isExternal={true}>
  <Button>
  {`Twitch`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/@mouredev`} isExternal={true}>
  <Button>
  {`YouTube`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/@mouredevtv`} isExternal={true}>
  <Button>
  {`Youtube (Canal secundario)`}
</Button>
</Link>
  <Link as={NextLink} href={`https://www.mouredev.com/discord`} isExternal={true}>
  <Button>
  {`Discord`}
</Button>
</Link>
</VStack>
  <VStack>
  <Image src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://mouredev.com`}>
  {`© 2014-2023 MOUREDEV BY BRAIS MOURE V3.`}
</Link>
  <Text>
  {` BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.`}
</Text>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
