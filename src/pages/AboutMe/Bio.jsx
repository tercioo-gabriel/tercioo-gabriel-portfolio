import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import './prism-custom-theme.css';

const Bio = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);


  const codeSnippet = `
class SobreMim {
  constructor() {
    this.name = "Tércio Gabriel de Jesus";
    this.area = "Desenvolvedor Front-End";
    this.bio = "  Lorem ipsum dolor sit, amet consectetur   adipisicing elit. Ut nesciunt a doloremque sapiente rem alias possimus praesentium tenetur, neque voluptate iure voluptatibus repellendus corrupti, ipsam sunt aperiam. Quibusdam, iusto non!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nesciunt a doloremque sapiente rem alias possimus praesentium tenetur, neque voluptate iure voluptatibus repellendus corrupti, ipsam sunt aperiam. Quibusdam, iusto non!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nesciunt a doloremque sapiente rem alias possimus praesentium tenetur, neque       voluptate iure voluptatibus repellendus corrupti, ipsam sunt aperiam. Quibusdam, iusto non!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nesciunt a doloremque sapiente rem alias possimus praesentium tenetur, neque voluptate iure voluptatibus repellendus corrupti, ipsam sunt  aperiam. Quibusdam, iusto non!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nesciunt a doloremque sapiente rem alias possimus praesentium tenetur, neque voluptate iure voluptatibus repellendus corrupti, ipsam sunt aperiam. Quibusdam, iusto non!   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nesciunt a doloremque sapiente rem alias possimus praesentium tenetur, neque voluptate iure voluptatibus repellendus corrupti, ipsam sunt aperiam. Quibusdam, iusto non!"
    }
}`;

  return (
    <div className="mx-2 sm:mx-8 lg:mx-10 sm:mt-16">
      <pre className="whitespace-pre-wrap break-words">
        <code className="language-js">
          {codeSnippet}
        </code>
      </pre>
    </div>
  );
};

export default Bio;