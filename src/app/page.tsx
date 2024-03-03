'use client'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

const Home = () => {
    const [opened, { toggle }] = useDisclosure()
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding='md'
        >
            <AppShell.Header>
                <Group h='100%' px='md'>
                    <Burger hiddenFrom='sm' onClick={toggle} opened={opened} size='sm' />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p='md'>
                Navbar
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton animate={false} h={28} key={index} mt='sm' />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>Main</AppShell.Main>
        </AppShell>
    )
}
export default Home
