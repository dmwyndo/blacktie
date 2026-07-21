"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type InspectionForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  company: string;
};

const emptyForm: InspectionForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  city: "",
  message: "",
  company: "",
};

type InspectionModalContextValue = {
  open: () => void;
  close: () => void;
};

const InspectionModalContext =
  createContext<InspectionModalContextValue | null>(null);

function useInspectionModal() {
  const context = useContext(InspectionModalContext);
  if (!context) {
    throw new Error(
      "useInspectionModal must be used within InspectionModalProvider",
    );
  }
  return context;
}

export function RequestInspectionButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useInspectionModal();

  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}

function InspectionDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<InspectionForm>(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = useCallback(() => {
    setForm(emptyForm);
    setStatus("idle");
    setErrorMessage("");
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleClose, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const firstField = dialogRef.current?.querySelector<HTMLElement>(
      "input:not([tabindex='-1'])",
    );
    firstField?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  function updateField(field: keyof InspectionForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="inspection-modal" onClick={handleClose}>
      <div
        ref={dialogRef}
        className="inspection-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="inspection-modal-close"
          onClick={handleClose}
          aria-label="Close inspection request form"
        >
          Close
        </button>

        {status === "success" ? (
          <div className="inspection-modal-success">
            <p className="eyebrow">Request received</p>
            <h2 id={titleId} className="display inspection-modal-title">
              Thanks — we&apos;ll be in touch.
            </h2>
            <p id={descriptionId}>
              We received your inspection request and will follow up shortly,
              usually within one business day.
            </p>
            <button
              type="button"
              className="btn solid inspection-modal-submit"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Free inspection</p>
            <h2 id={titleId} className="display inspection-modal-title">
              Request an inspection
            </h2>
            <p id={descriptionId} className="inspection-modal-lead">
              Tell us a little about your roof and we&apos;ll reach out to
              schedule a free on-site inspection.
            </p>

            <form className="inspection-form" onSubmit={handleSubmit}>
              <div className="inspection-form-grid">
                <label className="inspection-field">
                  <span>First name</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    value={form.firstName}
                    onChange={(event) =>
                      updateField("firstName", event.target.value)
                    }
                  />
                </label>
                <label className="inspection-field">
                  <span>Last name</span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    value={form.lastName}
                    onChange={(event) =>
                      updateField("lastName", event.target.value)
                    }
                  />
                </label>
              </div>

              <div className="inspection-form-grid">
                <label className="inspection-field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                  />
                </label>
                <label className="inspection-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                  />
                </label>
              </div>

              <label className="inspection-field">
                <span>City / service area</span>
                <input
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={(event) => updateField("city", event.target.value)}
                />
              </label>

              <label className="inspection-field">
                <span>How can we help?</span>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                />
              </label>

              <label className="inspection-honeypot" aria-hidden="true">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(event) =>
                    updateField("company", event.target.value)
                  }
                />
              </label>

              {status === "error" ? (
                <p className="inspection-form-error" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                className="btn solid inspection-modal-submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Submit request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function InspectionModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <InspectionModalContext.Provider value={{ open, close }}>
      {children}
      <InspectionDialog isOpen={isOpen} onClose={close} />
    </InspectionModalContext.Provider>
  );
}
