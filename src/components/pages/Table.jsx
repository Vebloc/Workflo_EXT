import React, {useState} from "react";
import "../../Table.css";

  const Table = () => {
    const headings = ["Marketing", "Project Management", "Client Management", "Engineering and IT", "Sales"]
    
    const [selectedHeading, setSelectedHeading] = useState(headings[0]);
    
    const details = {
      "Marketing": {
        content: (
        <div className="carousel-marketing">
          <h2 className="carousel-heading">Marketing</h2>
          <p className="carousel-message">Supercharge Your Marketing Efforts: Achieve More with Less Tools. Streamline task management, campaigns, and marketing content with real-time collaboration all in one place.</p>
          <ul className="carousel-list">
            <li>Manage and publish a wide range of marketing assets from a secure and user-friendly platform, eliminating the need for multiple tools</li>
            <li>Create, track, and monitor marketing campaigns</li>
            <li>Collaborate internally and externally for seamless sign-offs</li>
          </ul>
        </div>
      ),
      photo: "https://workflo.com/wp-content/uploads/2023/07/Dashboard-for-marketing-min.svg",
      },
      "Project Management": {
        content: (
        <div className="carousel-project-management">
          <h2 className="carousel-heading">Project Management</h2>
          <p className="carousel-message">Streamline your workflow and achieve greater efficiency in every aspect of project management.</p>
          <ul className="carousel-list">
            <li>Visualize and manage projects effortlessly with highly customizable views tailored to your team's needs</li>
            <li>Work seamlessly with your team, assign tasks, and stay informed with notifications, all in real-time, enhancing productivity</li>
            <li>Manage projects using visual widgets, dashboards, Gantt charts, and tables, enabling effective strategizing and monitoring of project performance</li>
          </ul>
        </div>
      ),
      photo: "https://workflo.com/wp-content/uploads/2023/07/Full-Task-min.svg",
      },
      "Client Management": {
        content: (
        <div className="carousel-client-management">
          <h2 className="carousel-heading">Client Management</h2>
          <p className="carousel-message">Strengthen client relationships with real-time collaboration, instant communication, and centralized file storage, ensuring smooth feedback cycles, timely progress reporting, and efficient document approval.</p>
          <ul className="carousel-list">
            <li>Instant messaging and one-click video meetings</li>
            <li>Easily request documents, saved in a centralized storage area</li>
            <li>Customized dashboards offer real-time progress reporting</li>
          </ul>
        </div>
      ),
      photo: "https://workflo.com/wp-content/uploads/2023/07/VideoCall_2-min.svg",
      },
      "Engineering and IT": {
        content: (
        <div className="carousel-engineering">
          <h2 className="carousel-heading">Engineering and IT</h2>
          <p className="carousel-message">Empower engineers to develop better products faster by providing a shared platform for prioritizing, planning, and managing tasks, with seamless DevOps integrations and automated progress tracking.</p>
          <ul className="carousel-list">
            <li>Boost productivity and keep deals moving through the pipeline with automated lead assignments, follow-up tracking, and lead status updates, ensuring a more efficient and organized sales workflow.</li>
            <li>Effortlessly manage the release process, from backlog to final release, ensuring smooth coordination and visibility for engineers throughout the development lifecycle</li>
            <li>Centralize the management of issues, bugs, and changes</li>
          </ul>
        </div>
      ),
      photo: "https://workflo.com/wp-content/uploads/2023/07/Engineering-min.svg",
      },
      "Sales": {
        content: (
        <div className="carousel-sales">
          <h2 className="carousel-heading">Sales</h2>
          <p className="carousel-message">Automate processes, manage accounts with ease, and gain real-time insights for better performance and faster deal closures.</p>
          <ul className="carousel-list">
            <li>Steamline lead assignments, follow-up tracking, and status updates for a more efficient workflow</li>
            <li>Track prospects, clients, and deals with flexible views for better decision-making</li>
            <li>Gain insights on deals, closing rates, and team performace for data-drive decisions and sales improvement</li>
          </ul>
        </div>
      ),
      photo: "https://workflo.com/wp-content/uploads/2023/07/6-min.svg",
      },
    };

    const handleClickHeading = (heading) => {
      setSelectedHeading(heading);
    };

    return (
      <div className="carousel-table">
        <table>
          <thead>
            <tr className="carousel-heading">
              {headings.map((heading, index) => (
                <th key={index} onClick={() => handleClickHeading(heading)} className={selectedHeading === heading ? "active" : ""}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <hr>
          </hr>
          <div className="carousel-photo-and-content">
            <tbody className="carousel-content">
              <tr>
                {headings.map((heading, index) => (
                  <td key={index} className={selectedHeading === heading ? "visible" : "hidden"}>
                    {details[heading].content}
                  </td>
                ))}
                <td>
                  <img src={details[selectedHeading].photo} alt={`${selectedHeading}`} className="carousel-photo"/>
                </td>
              </tr>
            </tbody>
          </div>
        </table>
      </div>
    )
  }

export default Table;