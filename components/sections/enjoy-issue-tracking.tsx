"use client";

import { Features } from "../Homepage/features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,7 9">
      <Features.Main
        title={
          <>
            Effortless Project Management
          </>
        }
        image="/issues.webp"
        text="Quickly set up tasks, monitor progress, and streamline your workflow with tools tailored to your business needs."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Task Organization",
            text: "Break down complex projects into manageable components.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Automated Updates",
            text: "Automatically track and archive project changes.",
          },
          {
            icon: WorkflowsIcon,
            title: "Custom workflows",
            text: "Define and optimize processes specific to your business.",
          },
          {
            icon: CustomViewsIcon,
            title: "Smart Filters",
            text: "View only the most relevant information.",
          },
          {
            icon: DiscussionIcon,
            title: "Integrated Communication.",
            text: "Collaborate effectively within the platform.",
          },
          {
            icon: IssuesIcon,
            title: "Templates",
            text: "Use predefined structures to standardize project tasks.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.webp",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "Flexible Project Views",
            text: "Toggle between board and list layouts to manage your tasks effectively.",
          },
          {
            image: "/card-views.webp",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Customize Your Workflow",
            text: "Quickly customize views with filters to focus on what matters.",
          },
        ]}
      />
    </Features>
  );
};
