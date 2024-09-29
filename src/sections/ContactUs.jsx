"use client";

import { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [colorMode] = useState(ColorMode.Dark);
  const [step, setStep] = useState(-1); // Start step at -1, so we can handle commands first
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [lineData, setLineData] = useState([
    <TerminalOutput key={0}>
      Welcome to the Contact Terminal! Let&apos;s get your information step by
      step.
    </TerminalOutput>,
    <TerminalOutput key={1}>
      Type &apos;help&apos; for available commands or &apos;start&apos; to
      begin.
    </TerminalOutput>,
  ]);

  // Helper function to add a new line to the terminal
  const addLine = (text) => {
    setLineData((prev) => [
      ...prev,
      <TerminalOutput key={prev.length}>{text}</TerminalOutput>,
    ]);
  };

  const handleInput = async (input) => {
    const trimmedInput = input.trim(); // Ignore leading/trailing spaces

    // Don't execute if input is an empty string
    if (!trimmedInput) return;

    // Add input to the terminal
    addLine(input);

    // Check for commands if step is -1 (before the form starts)
    if (step === -1) {
      switch (trimmedInput.toLowerCase()) {
        case "clear":
          setLineData([
            <TerminalOutput key={0}>
              Terminal cleared. Type &apos;help&apos; for available commands or
              &apos;start&apos; to begin.
            </TerminalOutput>,
          ]);
          return;
        case "help":
          addLine("Available commands:");
          addLine("'start' - Begin the contact form process");
          addLine("'clear' - Clear the terminal");
          addLine("'help' - Show this help message");
          return;
        case "start":
          setStep(0); // Start the information gathering
          addLine("Please enter your name:");
          return;
        default:
          addLine(`Command not found: '${trimmedInput}'`);
          return;
      }
    }

    // Stepwise form process if "start" was typed
    switch (step) {
      case 0:
        setForm((prev) => ({ ...prev, name: input }));
        addLine("Great! Now, please enter your email:");
        setStep(1);
        break;
      case 1:
        if (input.includes("@")) {
          setForm((prev) => ({ ...prev, email: input }));
          addLine("Excellent! Finally, please enter your message:");
          setStep(2);
        } else {
          addLine("That doesn&apos;t look like a valid email. Please try again:");
        }
        break;
      case 2:
        setForm((prev) => ({ ...prev, message: input }));
        addLine("Thank you! Here's a summary of your information:");
        addLine(`Name: ${form.name}`);
        addLine(`Email: ${form.email}`);
        addLine(`Message: ${input}`);
        addLine("Is this correct? Type 'yes' to submit or 'no' to start over.");
        setStep(3);
        break;
      case 3:
        if (input.toLowerCase() === "yes") {
          addLine("Submitting your message...");
          setIsLoading(true);

          try {
            await emailjs.send(
              "service_ym1e0e5",
              "template_tzyvr5e",
              {
                from_name: form.name,
                from_email: form.email, // Corrected this to form.email
                to_name: "Talha Ali",
                to_email: "hello@talhaali.xyz",
                message: form.message,
              },
              "34DWY2qiB923shhtQ"
            );
            addLine("Message sent successfully! Thank you for contacting us.");
          } catch (error) {
            addLine("Something went wrong. Please try again.");
          } finally {
            setIsLoading(false);
            setStep(-1); // Reset to initial state
            setForm({ name: "", email: "", message: "" });
          }
        } else if (input.toLowerCase() === "no") {
          setStep(0);
          setForm({ name: "", email: "", message: "" });
          setLineData([
            <TerminalOutput key={0}>
              Let&apos;s start over. Please enter your name:
            </TerminalOutput>,
          ]);
        } else {
          addLine("Please type 'yes' to submit or 'no' to start over.");
        }
        break;
      default:
        break;
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container w-full max-w-3xl">
          <h3 className="head-text mb-4">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mb-6">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>
          <div className="terminal-wrapper mt-10">
            <Terminal
              name="Contact Terminal"
              colorMode={colorMode}
              onInput={handleInput}
            >
              {lineData}
              {isLoading && (
                <TerminalOutput key={lineData.length}>
                  Sending message... Please wait.
                </TerminalOutput>
              )}
            </Terminal>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .terminal-wrapper {
          font-size: 16px;
        }
        .terminal-wrapper .react-terminal-wrapper {
          max-width: 100%;
          overflow-x: hidden;
        }
        .terminal-wrapper .react-terminal {
          min-height: 400px;
        }
        .terminal-wrapper .react-terminal-line {
          word-break: break-word;
          white-space: pre-wrap;
        }
        @media (max-width: 768px) {
          .terminal-wrapper {
            font-size: 14px;
          }
          .terminal-wrapper .react-terminal {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
