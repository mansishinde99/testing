import React from "react";
import "../styles/main.css"

const main = () => {
  return (
    <>
      <div className="navbar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuuCnVEOoQM4TlsMPShzm1bQW5JOiXxk88g&s" />
        <div className="content-details">
          <a href="/" className="content">Home</a>
          <a href="/about" className="content">About</a>
          <a href="/services" className="content">Services</a>
          <a href="/portfolio" className="content">Portfolio</a>
          <a href="/contact" className="content">Contact Us</a>
          <div className="login-button">
            <a className="log-button" href="/login">Login</a>
            <a className="log-button" href="/signup">SignUp</a>
          </div>
        </div>
      </div>
       
      <div className="main">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAotoqQqvMDR_AXqwvOI-UoQjDoDbopz8cuKx8b1WETiMQ-j4nFn6bUp7wgqJjWrUNWM&usqp=CAU" />
        <div className="text-content">
          <p className="text">Empowering businesses through billing</p>
          <p className="sub-text">
            Manage your business professionally with justbilling, India’s
            leading software for billing, inventory, and accounting.
          </p>
          <button className="getstarted">Get Started →</button>
        </div>
         
      </div>

      <div className="imgText">
        <div className="imgText-content">
          <p className="text">
            {" "}
            JustBilling software allows you to generate GST invoices for clients
            and share them digitally. This tool aids in establishing a
            professional brand image with its essential GST billing
            functionalities. You can utilize the JustBilling accounting and
            billing app to draft invoices, ensuring adherence to Goods and
            Services Tax regulations in India. The JustBilling app minimizes
            accounting mistakes and safeguards your business data. With just a
            few simple steps, you can create GST invoices using the app’s
            templates. Additionally, the JustBilling app can be accessed both
            online and offline, making it convenient for small and medium
            enterprises to follow optimal accounting practices and streamline
            their bookkeeping processes.{" "}
          </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqqWSyFsGrglnI7j3S3K0sAwk6BI-ReCVjA&s" />
        </div>

        <div className="imgText-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnS5Aea7tbxBqEXhlZrCrNrxQ3tk1Hli4HQ&s"
            alt=""
          />
          <p className="text">
            JustBilling brings the finest inventory management software with
            incredibly effective features. It helps improve business
            performance. Using the JustBilling app features like business
            reports, you can track your business’s sales. It will help
            understand how effectively you have managed your inventory. As the
            billing software, JustBilling keeps a record of business data within
            the app. It makes it hassle-free for business owners to create an
            effective strategy. Using inventory tracking features help maximise
            the utility of inventory space. Our inventory management tools
            simplify the process of pinpointing underperforming items. This
            analysis aids in optimizing space by removing infrequently sold
            products. With our inventory tracking capabilities, you can log and
            identify items effectively.
          </p>
        </div>

        <div className="imgText-content">
          <p className="text">
            JustBilling’s accounting and billing software assists small and
            medium-sized enterprises (SMEs) in securing prompt payments and
            managing their cash flow effectively. The platform enables users to
            monitor all outstanding payments directly from the business
            dashboard. UUtilizing the reminder functionality within the app, you
            can send payment notifications to clients. This feature helps remind
            them of their total balance due and the payment deadline via
            WhatsApp and email. By sending these reminders, you can ensure
            customers remember to make their payments, helping to maintain
            consistent cash flow and prevent unnecessary delays in your
            business.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Tww4ImOQrVWmhumFnNRYh5i1xPs9tE8shw&s"
            alt=""
          />
        </div>

        <div className="imgText-content">
          <img
            src="https://t4.ftcdn.net/jpg/05/03/04/87/360_F_503048792_cFBjNYCEDT7gUgwG7z4caObBRxKTRBMC.jpg"
            alt=""
          />
          <p className="text">
            Filing GST can be a daunting task for entrepreneurs, often requiring
            a lengthy manual process. However, with JustBilling billing
            software, generating GST reports becomes effortless, streamlining
            the entire filing procedure. Many business owners dedicate
            considerable time and energy each month to ensure compliance with
            tax regulations, which involves monitoring their invoices, expenses,
            and accounting records. Additionally, they need to manually input
            this data to submit their GST returns.
          </p>
        </div>
      </div>

      <div className="cards">
        <p className="card-content">Using our free GST accounting and billing software, you can seamlessly create custom
            invoices. Further, you can manage your dashboard and track inventory items. The free access provides you use
            many other useful features.We have kept all essential features of our business accounting tool accessible
            for free. The free features are available for lifetime for Android mobile users...
        </p>
        <p className="card-content">JustBilling business dashboard makes the entire management process seamless. You can
            check business cash flow, inventory status, open orders, and payment updates in one place.With free GST
            billing software and invoicing tools, you can manage your business using mobile.Accounting in your business
            becomes quite simple and efficient with this free software. As all data gets stored during invoicing...</p>
        <p className="card-content">
            Plan your inventory space
            Using our GST billing software, you can keep track of available items in your store. It can help you set up
            low inventory alerts to place advance orders and detect possible theft.
            Inventory management is crucial for businesses with a wide variety of items, and our free billing software
            helps in such cases.Using our GST invoicing software, you can keep track of available items in your store...
        </p>
    </div>

    <div className="contact">
        <p className="title">Contact Details</p>
        <form>
            <p className="details">Name</p>
            <input placeholder="Type here" />
            <p className="details">Email Id</p>
            <input placeholder="Type here" />
            <p className="details">Phone</p>
            <input placeholder="Type here" />
            <p className="details">Message</p>
            <input placeholder="Type here" style={{height: "6vw", textAlign: "left", alignItems: "start" }} />
        </form>
    </div>

    <div className="faqs">
        <p className="title">FAQS</p>
        <div className="ques">
            <p className="que">Which is the best billing software?</p>
            <p className="que">What is billing software?</p>
            <p className="que">How much does a billing software cost?</p>
            <p className="que">How do i invoice clients for free?</p>
            <p className="que">What is offline invoicing?</p>
        </div>
    </div>
    </>
  );
};

export default main;
