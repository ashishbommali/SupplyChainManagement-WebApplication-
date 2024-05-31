import React from 'react';
import producerImage from '../../assets/images/producer.jpg';
import retailerImage from '../../assets/images/retailer.jpg';
import distributorImage from '../../assets/images/distributor.jpg';
import consumerImage from '../../assets/images/consumer.jpg';
import './Content.css';

const Content = () => {
    return (
        <div className="landing-content">
            <div className="grid-container">
                <div className="content-item">
                    <img src={producerImage} alt="Producer" className="rounded-image" />
                    <div className="info-content">
                        <h3>Producer</h3>
                        <p>Also known as manufacturers, these companies or entities transform raw materials into finished products.</p>
                    </div>
                </div>
                <div className="content-item">
                    <img src={retailerImage} alt="Retailer" className="rounded-image" />
                    <div className="info-content">
                        <h3>Retailer</h3>
                        <p>Businesses that buy goods from manufacturers or wholesalers and sell them to consumers in smaller quantities for a profit.</p>
                    </div>
                </div>
                <div className="content-item">
                    <img src={distributorImage} alt="Distributor" className="rounded-image" />
                    <div className="info-content">
                        <h3>Distributor</h3>
                        <p>Also known as wholesalers, these people buy products from manufacturers in bulk and then sell them in smaller quantities to retailers.</p>
                    </div>
                </div>
                <div className="content-item">
                    <img src={consumerImage} alt="Consumer" className="rounded-image" />
                    <div className="info-content">
                        <h3>Consumer</h3>
                        <p>Is a person or group of people who buy or use goods and services for personal use, not for business or manufacturing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
