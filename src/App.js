import './App.css';
import bk from "./images/bk.png"
import bk2 from "./images/bk2.jpg"
import photo from "./images/photo.jpg"
import opv from "./images/opv.png"
import almightystocks from "./images/almightystock.png"
import bettsllc from "./images/bettsllc.png"
import instagram from "./images/instagram.png"
import email from "./images/email.png"
import 'antd/dist/antd.css';
import useWindowDimensions from './components/useWindowDimensions';
import { Layout, Menu, Image, Button, Card, Modal, Carousel, List, Typography, Divider } from 'antd';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

function App()
{
  const services =
  [
    'Web App Development',
    'Website Maintenance',
    'Domain & Hosting',
  ]

  const websites =
  [
    {
      name: "Official OPV",
      photo: opv,
      link: "https://officialopv.com/"
    },
    {
      name: "Almighty Stocks",
      photo: almightystocks,
      link: "https://almightystocks.co/"
    },
    {
      name: "Betts LLC",
      photo: bettsllc,
      link: "https://bettsllc.co/"
    }
  ]

  return (
    <Layout>
      <Header style={{ width: '100%', backgroundColor: 'black' }}>
        <div style={{float: 'left', width: '260px', height: '50px', margin: '8px 24px 16px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {/* <img src={logo} alt='logo' style={{width: '100px'}}/> */}
          <h1 style={{color: 'white', margin: '0px 0px 0px 5px', fontWeight: 'bold'}}>ANT DESIGNS LLC</h1>
        </div>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} style={{backgroundColor: 'black'}}>
          <Menu.Item key="1" style={{backgroundColor: 'black'}}><a href='#home' style={{color: 'white'}}>HOME</a></Menu.Item>
          <Menu.Item key="2" style={{backgroundColor: 'black'}}><a href='#services' style={{color: 'white'}}>SERVICES</a></Menu.Item>
          {/* <Menu.Item key="3" style={{backgroundColor: 'black'}}><a href='#works' style={{color: 'white'}}>WORKS</a></Menu.Item> */}
          <Menu.Item key="3" style={{backgroundColor: 'black'}}><a href='#contact' style={{color: 'white'}}>CONTACT</a></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="App">
          <div id='home' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url(${bk})`,
            backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px', minHeight: 500, position: 'relative'
          }}>
            <h1 style={{fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'white',
              backgroundColor: 'black', padding: 20, fontSize: '30px'
            }}>
              welcome to Ant Designs llc
            </h1>
            <Button size='large'  style={{fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'white',
              backgroundColor: 'black', borderColor: 'white', bottom: 20, position: 'absolute'
            }}>
              <a href='#services'>services</a>
            </Button>
          </div>
          <div id='services' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            scrollMarginTop: '64px', backgroundColor: 'black'
          }}>
            <h1 style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>Services Provided</h1>
            <p style={{color: 'white', textAlign: 'center', fontSize: 25}}>
              We provide Web Application development using technologies such
              <br />
              as React and JavaScript.
              <br />
              The web applications are responsive and interactive for the user.
              <br />
              They are designed so it can be used on desktop and mobile devices.
            </p>
            <List
              size="large"
              // header={<div>Header</div>}
              // footer={<div>Footer</div>}
              // bordered
              dataSource={services}
              renderItem={item =>
                <List.Item
                  style={{color: 'white'}}
                >
                  {item}
                </List.Item>
              }
            />
            <h2 style={{textAlign: 'center', color: 'white', textDecorationLine: 'underline' }}>WORKS</h2>
            <div style={{width: '100%', alignItems: 'center', display: 'flex',
              flexDirection: useWindowDimensions().width > 900 ? 'row' : 'column', justifyContent: 'center'
            }}>
              {
                websites.map(item =>
                  {
                    return (
                      <a target="_blank" rel="noreferrer" href={item.link}>
                        <Card
                          hoverable
                          // onClick={() => location.href = item.link}
                          style={{ width: 300, margin: 10 }}
                          cover={<img src={item.photo} />}
                        >
                          <Meta title={<a target="_blank" rel="noreferrer" href={item.link}>{item.name}</a>}/>
                        </Card>
                      </a>
                    )
                  })
              }
            </div>
          </div>
          <div id='contact' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column',
            padding: 20, backgroundAttachment: 'fixed', backgroundPosition: 'center',
            scrollMarginTop: '64px', justifyContent: 'center', backgroundImage: `url(${bk2})`,
            minHeight: 500
          }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img src={photo} />}
            >
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Meta description={<a target="_blank" rel="noreferrer" href='https://www.instagram.com/antdesignsllc/'><img src={instagram} width='100'/></a>} style={{textAlign: 'center'}}/>
                <Meta description={<a target="_blank" rel="noreferrer" href='mailto:antdesignsllc@gmail.com'><img src={email} width='85'/></a>} style={{textAlign: 'center'}}/>
              </div>
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Made By ANT DESIGNS LLC
      </Footer>
    </Layout>
  );
}

export default App;
