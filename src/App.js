import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';
import './assets/css/media_query.css';
import './assets/css/main.css';
import './assets/js/script.js'

import { BrowserRouter} from "react-router-dom";
import ApplicationRouting from "./routing/ApplicationRouting";
import { Helmet } from 'react-helmet';

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <meta name="description" content="I am a Full-Stack developer based in Contai,East Midnapore,West Bengal, India. I have Runing my Bachelor of Computer Applicatio from Contai Collage And Learning & Management Science. I am very passionate about improving my coding skills & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones."/>
                <meta name="keywords" content="Mahadev Jana,cclms student mahadev jana,mahadev jana cclms student,mahadev jana cclms best student,mahadev jana cclms good student,Mahadev Jana-CCLMS,CCLMS-Mahadev Jana,mahadev jana,cclms,cclms student mahadev jana,cclms student Mahadev Jana,cclms,contai collage of learning of management secince,cclms student,Mahadev,jana mahadev,contai developer,contai Full-Stack web developer,India full stack devloper,pdampukuria,purba gopinathpur,web devloper mahadev,website devloper,admin pnael,stack,developer,contai,mahadev,skills,mahadev,jana,home,resume,education"/>
                <title>Mahadev Jana</title>
                <meta property="og:url" content="https://www.mahadevjana.dev" />
                <link rel="canonical" href="https://www.mahadevjana.dev"/>
                <meta name="author" content="Mahadev Jana"/>
                <meta property="og:site_name" content="Mahadev Jana"/>
                <meta name="google-site-verification" content="Cuc2SuFGmv-mxWRtIfwbSvccrNb8CH0UoTqqFkhexYQ" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
            <ApplicationRouting/>
        </BrowserRouter>
    );
}

export default App;
