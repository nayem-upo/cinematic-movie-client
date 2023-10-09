"use client"
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import { SignIn } from '@clerk/nextjs';

const page = () => {
    const router = useRouter();
    const returnUrl = router?.query?.returnUrl || '/';

    return (
        <div>
            <Header></Header>
            <div
                className='min-h-screen'
                style={{
                    backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcvqzzo-079fc1d0-1d41-4add-a0f6-a32018b7c17d.jpg/v1/fill/w_1192,h_670,q_70,strp/2018_movie_posters__8th_edition_by_thekingblader995_dcvqzzo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGN2cXp6by0wNzlmYzFkMC0xZDQxLTRhZGQtYTBmNi1hMzIwMThiN2MxN2QuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3Z-pjudO8DU8ebkq5_mDqnZE6ogWTD7_jxj3xY_1VEo")`,
                    backgroundSize: 'cover',
                    position: 'relative',
                }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    className='bg-[#212121e5] z-0'
                >
                    <div className='flex justify-center items-center mt-6'>
                        <SignIn afterSignInUrl={returnUrl} />
                    </div>

                </div>
            </div>

            <MenuBar></MenuBar>
        </div>
    );
};

export default page;