import './css/specials.css';
import React, { useState , forwardRef, useImperativeHandle} from 'react';

const Specials = forwardRef((props, ref) => {
  const { specialsRef } = props;

  useImperativeHandle(specialsRef, () => ({
      scrollIntoView: () => {
          window.scrollTo({
              behavior: 'smooth',
              top: 0,
          });
      },
  }));

  const [activeTab, setActiveTab] = useState('tab-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabs = [
    {
      id: 'tab-1',
      title: 'Modi sit est',
      content: 'Content for tab-1',
      image: '/images/specials-1.jpg', // Image path or URL for tab-1
    },
    {
      id: 'tab-2',
      title: 'Unde praesentium rey sed',
      content: 'Content for tab-2',
      image: '/images/specials-2.jpg', // Image path or URL for tab-2
    },
    {
      id: 'tab-3',
      title: 'Unde praesentiumtey  sed',
      content: 'Content for tab-3',
      image: '/images/specials-3.jpg',
    },
    {
      id: 'tab-4',
      title: 'Unde eryesed',
      content: 'Content for tab-4',
      image: '/images/specials-4.jpg',
    },
    {
      id: 'tab-5',
      title: 'Modi sit est',
      content: 'Content for tab-5',
      image: '/images/specials-5.jpg', // Image path or URL for tab-1
    },
  ];
  return (
    <section id="specials" className="specials my-5" ref={ref}>
    <div className="container">
      <div className="section-title">
        <h2>Check our <span>Specials</span></h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <ul className="nav nav-tabs flex-column">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`nav-link ${activeTab === tab.id ? 'active show' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                  href={`#${tab.id}`}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="tab-content">
            {tabs.map((tab) => (
              <div key={tab.id} className={`tab-pane ${activeTab === tab.id ? 'active show' : ''}`} id={tab.id}>
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{tab.title}</h3>
                    <p>{tab.content}</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={tab.image} alt={`Specials ${tab.id}`} className="img-fluid" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
   );
  });
  
export default Specials ;
