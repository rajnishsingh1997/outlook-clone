

import React from 'react';

const Emailbodyprev = ({ details }) => {
  if (!details) return null;  // Return null if no details are passed

  const { subject, from, date, short_description } = details;

  return (
    <>
      <div className='parent-body'>
        <div className='left-head-2'>
          <div className='circle'>{from.name.charAt(0).toUpperCase()}</div>
        </div>

        <div className="email-body" >
          <h2>{subject}</h2>
          <p className="date">
            {new Date(date).toLocaleString()}
          </p>
          <p>{short_description}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates reiciendis hic, fugiat molestias
            odit tenetur nam ipsa cumque dignissimos, accusantium nesciunt dolore natus sed similique ex qui. Harum, quo consequuntur
            labore aperiam vel fugiat, possimus odio, expedita ipsam repudiandae sequi quaerat! Temporibus distinctio, aspernatur voluptatem
            consequatur laborum, quos similique officia totam minus repellat sit architecto, at fuga sapiente maiores harum aliquid expedita
            impedit alias ad quaerat facilis adipisci. Ipsa hic laboriosam error, earum aliquam quo. Earum id, illo doloribus explicabo animi
            sapiente exercitationem obcaecati fugit quidem maiores soluta suscipit mollitia, nemo quisquam. Voluptate asperiores atque qui autem!
            Modi, recusandae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas iusto aliquid blanditiis possimus itaque similique ipsum ipsam vel, odio vitae perferendis aperiam optio. Nesciunt laborum similique voluptatem ipsa debitis, eius officia totam aliquid qui consectetur eos excepturi aut sapiente fugit. Deserunt doloremque eos voluptatem corporis omnis laborum quas aperiam neque alias possimus, porro praesentium! Quia sequi, veniam, sunt quasi dolor, voluptatum quam molestias sed consectetur eveniet qui quos vel quod eius aliquam modi doloribus nisi non corrupti placeat animi. Omnis illo veritatis praesentium, laudantium, esse eum sunt eius obcaecati, alias quae accusamus. Quibusdam sequi deleniti aperiam, sed asperiores voluptatem consequuntur in enim aliquid veritatis amet, consequatur corrupti cum atque corporis facilis ipsum placeat sit facere. Doloribus quis molestiae cum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident fuga facilis! Est, excepturi voluptates laboriosam iure optio accusantium at, iusto unde blanditiis quam architecto nobis ratione sint reprehenderit consequatur fuga mollitia fugiat, enim maxime qui et exercitationem? In itaque nihil sunt. Consequuntur, magni? Reiciendis ullam, optio tempora perferendis hic delectus. Dolore fugit ullam velit similique placeat natus reiciendis ducimus itaque quidem provident quibusdam, officiis fugiat porro illo quae ipsum ea quia? Cupiditate voluptatibus eligendi optio modi cumque libero porro perspiciatis nobis et reiciendis corrupti, eius dolorum officia numquam odit provident atque tenetur animi, tempora pariatur ducimus non fuga mollitia!</p>
        </div>

      </div>
    </>
  );
};

export default Emailbodyprev;
