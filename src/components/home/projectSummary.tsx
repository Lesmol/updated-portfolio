import React from "react";
import LinkItem from "./linkItem";

function projectSummary() {
  return (
    <div className="mt-8">
      <h3 className="mb-1 text-xl">Projects</h3>
      <p className="mb-4 text-sm text-primary">
        Public repo&#39;s of projects I&#39;m either working on or completed.
      </p>
      <LinkItem
        title="Responsive React App deployed on Azure"
        link="https://github.com/Lesmol/CloudResumeChallenge_AWS"
      />
      <LinkItem
        title="Next.js Frontend with .NET Core Minimal API Backend"
        link="https://github.com/Lesmol/zupi-site"
      />
      <LinkItem
        title="Full-stack .NET Core MVC application with Azure hosted MS SQL Server Database"
        link="https://github.com/Lesmol/Techspo_Website"
      />
    </div>
  );
}

export default projectSummary;
