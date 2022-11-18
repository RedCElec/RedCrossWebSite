import AppLayout from "../components/Layout";


export default function testApi() {


    const faireUneDiv = (): any => {

        fetch("http://localhost:3080/testFetch", {
            method: 'POST',
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }

    return (
        <AppLayout type="centered" className="flex flex-col">
            <div> Bonjour</div>

            <button className='border-1 bg-black text-white' onClick={faireUneDiv()}> Il faut un button quand meme</button>
        </AppLayout>
    )
}