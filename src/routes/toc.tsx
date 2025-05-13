import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/toc")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div id="tos" className="mx-auto w-[90%] py-12">
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Effective Date: May&nbsp;13, 2025</strong>
      </p>

      <h2>LEGAL NOTICE</h2>
      <p>
        PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. BY ACCESSING,
        BROWSING, OR OTHERWISE USING THE WHATSWRAPPED WEBSITE, ITS SERVICES,
        SOFTWARE, APPLICATIONS, DATA SYSTEMS, ALGORITHMIC PROCESSES, OR ANY
        COMPONENT OF ITS ANALYTICS ENGINE (COLLECTIVELY, THE “SERVICE”), YOU
        (THE “USER”) ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO
        BE LEGALLY BOUND BY ALL TERMS, CONDITIONS, POLICIES, AND DISCLOSURES
        CONTAINED HEREIN. IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, YOU
        MUST CEASE ACCESS TO THE SERVICE IMMEDIATELY.
      </p>

      <p>
        This document comprises a comprehensive and enforceable contractual
        agreement between you (a “User,” “you,” or “your”) and WhatsWrapped, a
        digital analytics service provider (“WhatsWrapped,” “we,” “us,” or
        “our”). These Terms of Service (the “Terms”) govern your access to and
        use of any and all features, functionalities, tools, and content
        associated with the WhatsWrapped ecosystem. These Terms are complemented
        by, and incorporate by reference, the WhatsWrapped Privacy Policy,
        Cookie Policy, End-User License Agreement (EULA), Data Processing
        Agreement (DPA), Acceptable Use Policy (AUP), API Usage Guidelines, and
        any additional documentation or policy linked or referenced herein
        (collectively, the “Agreement”).
      </p>

      <p>
        If you are entering into this Agreement on behalf of a company,
        organization, or other legal entity, you represent and warrant that you
        have the authority to bind such entity and its affiliates to these
        Terms. In such case, “you” or “your” shall also refer to such entity and
        its affiliates, as applicable. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF
        YOU DO NOT AGREE WITH THESE TERMS, YOU MAY NOT ACCESS OR USE THE
        SERVICE.
      </p>

      <p>
        IMPORTANT NOTICE REGARDING ARBITRATION: THESE TERMS CONTAIN AN
        ARBITRATION CLAUSE AND CLASS ACTION WAIVER THAT AFFECT YOUR LEGAL
        RIGHTS. BY ACCEPTING THESE TERMS, YOU AGREE TO RESOLVE ALL DISPUTES
        THROUGH BINDING INDIVIDUAL ARBITRATION, RATHER THAN IN COURT, AND YOU
        WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE
        ARBITRATION.
      </p>

      <p>
        The Service is intended only for individuals who are at least 18 years
        old or of legal age in their jurisdiction of residence. By using the
        Service, you affirm that you are either at least 18 years of age or the
        legal age of majority in your jurisdiction and are fully able and
        competent to enter into and comply with the terms of this Agreement.
      </p>

      <p>
        WHATSWRAPPED RESERVES THE RIGHT TO MODIFY, AMEND, RESTRUCTURE,
        SUPPLEMENT, REPEAL, OR OTHERWISE ALTER ANY PROVISION OF THIS AGREEMENT
        AT ITS SOLE DISCRETION AND WITHOUT PRIOR NOTICE, SUBJECT ONLY TO
        APPLICABLE LAW. CONTINUED USE OF THE SERVICE AFTER THE PUBLICATION OF
        SUCH CHANGES CONSTITUTES ACCEPTANCE OF THOSE CHANGES. YOU ARE
        RESPONSIBLE FOR REVIEWING THIS AGREEMENT PERIODICALLY TO ENSURE THAT YOU
        ARE AWARE OF ANY UPDATES.
      </p>

      <p>
        THIS AGREEMENT CONSTITUTES THE ENTIRE, FINAL, AND EXCLUSIVE AGREEMENT
        BETWEEN YOU AND WHATSWRAPPED AND SUPERSEDES ALL PRIOR OR CONTEMPORANEOUS
        AGREEMENTS, UNDERSTANDINGS, REPRESENTATIONS, AND WARRANTIES, WHETHER
        WRITTEN OR ORAL, WITH RESPECT TO THE SUBJECT MATTER HEREOF.
      </p>

      <p>
        The definitions, clauses, and limitations herein shall be interpreted
        and enforced in accordance with the most expansive permissible
        interpretation permitted under applicable law.
      </p>

      <h2>0. BRAND AND TRADEMARK DISCLAIMER</h2>
      <ol>
        <li>
          WhatsApp is a trademark of Meta Platforms, Inc. (formerly Facebook,
          Inc.) or its affiliates. All product names, logos, and brands are
          property of their respective owners.
        </li>
        <li>
          WhatsWrapped is an independent product that is not affiliated with,
          endorsed by, or sponsored by WhatsApp Inc., Meta Platforms, Inc., or
          any of their subsidiaries.
        </li>
        <li>
          Any references to “WhatsApp” within the Service or this Agreement are
          solely for descriptive or informational purposes to identify
          compatibility and scope of data analysis services provided by
          WhatsWrapped.
        </li>
      </ol>

      <h2>1. DEFINITIONS</h2>
      <ol>
        <li>
          “Agreement” means these Terms and Conditions and any related policy,
          notice, annex, or document incorporated herein by reference, including
          but not limited to the Privacy Policy, Cookie Policy, and Acceptable
          Use Policy.
        </li>
        <li>
          “User” refers to any individual, legal person, natural person, entity,
          association, organization, or institution that accesses, uses,
          interacts with, or otherwise benefits from the Service in any way,
          whether directly or indirectly.
        </li>
        <li>
          “Service” means all digital offerings, including but not limited to
          the WhatsWrapped web platform, user interface, analytics engine,
          back-end systems, APIs, embedded code snippets, diagnostic scripts,
          statistical processors, and associated operational mechanisms
          developed, owned, licensed, or deployed by WhatsWrapped.
        </li>
        <li>
          “User Content” includes but is not limited to uploaded WhatsApp chat
          files, file metadata, exported ZIP or TXT formats, annotations,
          timestamps, user-submitted email addresses, and any data derived
          therefrom.
        </li>
        <li>
          “Aggregated Data” refers to data that has been processed, anonymized,
          de-identified, grouped, or transformed in such a way that it cannot,
          in the reasonable judgment of WhatsWrapped, be used to identify a
          specific individual, even when cross-referenced with other data
          sources.
        </li>
        <li>
          “Behavioral Profiling” means the application of computational logic,
          inference-based modeling, and automated statistical techniques to User
          Content for the purpose of categorizing communication styles,
          emotional tone, lexical distribution, or inferred interpersonal
          dynamics. Profiling does not result in legal or similarly significant
          effects on individuals.
        </li>
        <li>
          “Derived Metrics” are values or indicators created by applying
          transformation functions, mathematical operations, or NLP techniques
          on raw User Content, including but not limited to word frequency
          counts, sentiment weights, emoji cluster indexes, participation
          scores, silence gap ratios, and vocabulary entropy measures.
        </li>
        <li>
          “Processing” includes but is not limited to the collection, storage,
          structuring, adaptation, retrieval, consultation, use, aggregation,
          pseudonymization, combination, restriction, erasure, and destruction
          of data.
        </li>
        <li>
          “GDPR” and “CCPA” refer to, respectively, the General Data Protection
          Regulation (EU 2016/679) and the California Consumer Privacy Act of
          2018, along with any implementing or amending legislation.
        </li>
      </ol>

      <h2>2. USER OBLIGATIONS</h2>
      <p>
        By using the Service, you represent and warrant that you are authorized
        to provide any and all content you submit, and that such submission does
        not violate any law, contract, intellectual property right, or privacy
        obligation.
      </p>

      <h3>2.2 Prohibited Conduct</h3>
      <ol type="a">
        <li>
          Upload content you do not have the right to share, including chat data
          containing sensitive personal information or personal data belonging
          to third parties without consent;
        </li>
        <li>
          Use the Service to harass, threaten, defame, or abuse any individual
          or group;
        </li>
        <li>
          Attempt to probe, scan, or test the vulnerability of the Service or
          circumvent security mechanisms;
        </li>
        <li>
          Interfere with or disrupt the integrity or performance of the Service;
        </li>
        <li>
          Access the Service in order to build a competitive product or service;
        </li>
        <li>
          Share access credentials or allow multiple individuals to use a single
          login (if accounts are introduced);
        </li>
        <li>
          Use bots, scripts, or automated agents to collect, crawl, scrape, or
          access data outside of normal API usage guidelines.
        </li>
      </ol>

      <p>
        You agree to comply with all applicable international, national, state,
        provincial, and local laws, statutes, ordinances, and regulations in
        connection with your use of the Service.
      </p>

      <p>
        You are solely responsible for ensuring that all individuals whose data
        may be included in uploaded chats are properly informed and have
        granted, to the extent required by law, any necessary consents or
        authorizations for such data to be processed by WhatsWrapped in
        accordance with this Agreement.
      </p>

      <h2>3. DATA LICENSING, INTELLECTUAL PROPERTY, AND USAGE RIGHTS</h2>

      <h3>3.1 Ownership of User Content</h3>
      <p>
        You retain full ownership of all original chat data and metadata you
        upload to the Service (“User Content”). Nothing in this Agreement
        transfers to WhatsWrapped any intellectual property rights you hold in
        such User Content, except for the limited licenses expressly granted
        herein.
      </p>

      <h3>3.2 License to Process User Content</h3>
      <p>
        By uploading, submitting, transmitting, or otherwise making User Content
        available through the Service, you grant WhatsWrapped and its affiliates
        a non-exclusive, worldwide, royalty-free, irrevocable, sublicensable,
        transferable license to access, use, host, process, analyze, reproduce,
        translate, adapt, modify, aggregate, publish, distribute, perform, and
        display such content in connection with:
      </p>
      <ol type="a">
        <li>providing the Service and associated functionalities to you;</li>
        <li>enhancing, debugging, or securing the Service;</li>
        <li>
          developing, training, testing, and validating machine learning models
          and statistical tools;
        </li>
        <li>
          producing derived insights, aggregated summaries, and anonymized
          metrics;
        </li>
        <li>
          complying with legal obligations or responding to lawful requests.
        </li>
      </ol>

      <h3>3.3 Scope of Usage</h3>
      <p>
        The foregoing license includes the right to use uploaded User Content:
      </p>
      <ul>
        <li>For display in analytics dashboards and downloadable reports;</li>
        <li>
          To perform pattern analysis, frequency evaluation, entity extraction,
          and semantic segmentation;
        </li>
        <li>
          To generate pseudonymous, non-attributable behavior archetypes and
          profile clusters as part of research and system training.
        </li>
      </ul>

      <h3>3.4 Derived Work Ownership</h3>
      <p>
        All Derived Metrics, analytical reports, performance insights, and
        behavioral profile artifacts created from User Content, whether
        presented to you or retained internally, are the sole intellectual
        property of WhatsWrapped and shall not be deemed to constitute User
        Content. You acknowledge that such derived outputs may be used by
        WhatsWrapped in perpetuity for any commercial, operational, diagnostic,
        or developmental purpose.
      </p>

      <h3>3.5 Intellectual Property of the Service</h3>
      <p>
        All content, systems, source code, APIs, interface layouts, algorithms,
        software tools, icons, and branding elements comprising or forming part
        of the Service are and shall remain the exclusive intellectual property
        of WhatsWrapped or its licensors. Except where expressly permitted, you
        may not:
      </p>
      <ol type="a">
        <li>
          Modify, decompile, reverse engineer, or disassemble any part of the
          Service;
        </li>
        <li>
          Copy, distribute, rent, lease, sublicense, or create derivative works
          from any portion of the Service;
        </li>
        <li>
          Use any automated or manual means to extract source material or design
          elements.
        </li>
      </ol>

      <h3>3.6 Feedback License</h3>
      <p>
        You may choose to submit suggestions, comments, bug reports, or ideas
        about the Service (“Feedback”). By doing so, you agree that WhatsWrapped
        shall have a fully transferable, sublicensable, royalty-free, perpetual,
        and irrevocable license to use, copy, modify, publish, redistribute, and
        create derivative works from any Feedback you submit without
        compensation or attribution.
      </p>

      <h2>4. DATA HANDLING, STORAGE, AND RETENTION</h2>
      <ol>
        <li>
          <strong>Temporary Storage.</strong> User Content is stored on secure
          servers for the purpose of analysis, feature testing, research, and
          system diagnostics. There is no fixed deletion schedule, and files may
          be retained for a duration determined by technical needs, compliance
          obligations, or operational purposes.
        </li>
        <li>
          <strong>Secure Environments.</strong> All storage environments adhere
          to security protocols including access controls, encryption at rest
          and in transit, and periodic vulnerability scans. Data centers
          utilized are compliant with industry standards including but not
          limited to ISO 27001, SOC 2, and GDPR data locality requirements where
          applicable.
        </li>
        <li>
          <strong>Retention of Derived Data.</strong> While raw User Content is
          scheduled for deletion post-processing, Derived Metrics, Aggregated
          Data, and Pseudonymized Artifacts derived from the content may be
          retained indefinitely. These artifacts may be used for algorithm
          training, performance benchmarking, and the creation of behavioral
          pattern indexes.
        </li>
        <li>
          <strong>Pseudonymization.</strong> Where feasible, identifying
          elements of uploaded data are pseudonymized before further processing.
          This includes the stripping or substitution of sender names, contact
          information, and group identifiers unless those attributes are
          critical to the analytical outputs selected by the user.
        </li>
        <li>
          <strong>Legal Retention.</strong> WhatsWrapped may retain certain
          information to fulfill legal obligations, including data related to
          user consent, audit trails, regulatory reporting, and dispute
          resolution. Such retention is performed under appropriate legal bases
          as specified in the Privacy Policy.
        </li>
        <li>
          <strong>Deletion Requests.</strong> Users may initiate deletion
          requests for data artifacts by contacting hello@whatswrapped.me with
          sufficient verification. Such requests will be honored to the extent
          technically feasible, except where retention is legally required or
          data has already been anonymized beyond reversibility.
        </li>
      </ol>

      <h2>5. COMPLIANCE WITH LAWS AND REGULATORY FRAMEWORKS</h2>
      <ol>
        <li>
          WhatsWrapped shall process all personal data in accordance with
          applicable data protection laws, including but not limited to the
          GDPR, the CCPA, the UK Data Protection Act 2018, and any other
          relevant jurisdictional statutes or directives.
        </li>
        <li>
          In jurisdictions where additional consents are required for data
          processing activities—including profiling, international transfers, or
          the use of third-party processors—WhatsWrapped shall make reasonable
          efforts to obtain such consents or provide sufficient disclosures to
          meet compliance obligations.
        </li>
        <li>
          Users located in the European Union or California acknowledge that
          they are entitled to certain rights under GDPR or CCPA, as applicable,
          and agree to the lawful bases for data processing outlined in the
          Privacy Policy and Section 4 of this Agreement.
        </li>
        <li>
          WhatsWrapped may designate a Data Protection Officer (DPO) and
          maintain appropriate documentation required under Article 30 of the
          GDPR and equivalent regulatory frameworks.
        </li>
      </ol>

      <h2>6. SECURITY, DATA BREACHES, AND INCIDENT RESPONSE</h2>
      <ol>
        <li>
          WhatsWrapped implements a comprehensive information security program
          consisting of administrative, technical, and physical safeguards to
          protect the confidentiality, integrity, and availability of data.
        </li>
        <li>
          These safeguards include, but are not limited to:
          <ol type="a">
            <li>End-to-end encryption during data transmission;</li>
            <li>
              Role-based access control (RBAC) to restrict access to sensitive
              systems;
            </li>
            <li>Secure software development lifecycle (SSDLC) protocols;</li>
            <li>
              Continuous vulnerability assessments and third-party penetration
              testing.
            </li>
          </ol>
        </li>
        <li>
          In the event of a data breach that materially impacts personal data,
          WhatsWrapped shall:
          <ol type="a">
            <li>
              Notify relevant supervisory authorities within 72 hours of
              becoming aware of the breach, where required;
            </li>
            <li>
              Notify affected Users without undue delay when there is a high
              risk to their rights and freedoms;
            </li>
            <li>
              Maintain breach logs, root cause analysis, and evidence of
              remedial actions for regulatory inspection.
            </li>
          </ol>
        </li>
      </ol>

      <h2>7. LIMITATION OF LIABILITY</h2>
      <ol>
        <li>
          TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, WHATSWRAPPED
          SHALL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY DAMAGES OF
          ANY KIND, WHETHER DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL,
          SPECIAL, EXEMPLARY, OR PUNITIVE, INCLUDING BUT NOT LIMITED TO DAMAGES
          FOR LOST PROFITS, LOSS OF GOODWILL, DATA LOSS, BUSINESS INTERRUPTION,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER COMMERCIAL
          DAMAGES OR LOSSES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF
          LIABILITY (CONTRACT, TORT, OR OTHERWISE), ARISING OUT OF OR IN
          CONNECTION WITH THIS AGREEMENT OR YOUR USE OF OR INABILITY TO USE THE
          SERVICE, EVEN IF WHATSWRAPPED HAS BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES OR IF THE REMEDY OTHERWISE FAILS OF ITS ESSENTIAL
          PURPOSE. THIS EXCLUSION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT
          PERMITTED BY LAW.
        </li>
        <li>
          IN NO EVENT SHALL WHATSWRAPPED’S TOTAL AGGREGATE LIABILITY FOR ALL
          CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICE
          EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (US $100.00) OR THE
          AMOUNT YOU PAID TO WHATSWRAPPED IN THE TWELVE (12) MONTHS PRIOR TO THE
          EVENT GIVING RISE TO THE LIABILITY.
        </li>
      </ol>

      <h2>8. INDEMNIFICATION</h2>
      <p>
        You agree to indemnify, defend, and hold harmless WhatsWrapped and its
        affiliates, officers, directors, employees, contractors, licensors,
        agents, successors, and assigns from and against any and all claims,
        liabilities, damages, losses, costs, expenses, and fees (including
        reasonable attorneys’ fees) arising from:
      </p>
      <ol type="a">
        <li>Your use of or access to the Service;</li>
        <li>Your violation of any term of this Agreement;</li>
        <li>Your violation of any applicable law, rule, or regulation;</li>
        <li>
          Your infringement or misappropriation of any intellectual property
          right or other right of any third party;
        </li>
        <li>
          Any data you provide to the Service, including uploaded User Content.
        </li>
      </ol>

      <h2>9. DISPUTE RESOLUTION AND GOVERNING LAW</h2>
      <ol>
        <li>
          This Agreement shall be governed by and construed in accordance with
          the laws of the State of Delaware, United States, without regard to
          its conflict of laws principles.
        </li>
        <li>
          Any dispute, controversy, or claim arising out of or relating to this
          Agreement or the breach thereof shall be resolved by binding
          arbitration under the rules of the American Arbitration Association
          (AAA), and judgment upon the award rendered by the arbitrator(s) may
          be entered in any court having jurisdiction thereof.
        </li>
        <li>
          The arbitration shall be conducted in English and held in New York,
          New York, unless otherwise agreed by the parties in writing.
        </li>
        <li>
          You agree to waive any right to a jury trial or to participate in a
          class action lawsuit. Arbitration will be conducted on an individual
          basis, and no arbitration shall be joined with another without prior
          written consent from all parties involved.
        </li>
      </ol>

      <h2>10. TERMINATION AND SUSPENSION</h2>
      <ol>
        <li>
          WhatsWrapped reserves the right, in its sole discretion and without
          liability to you or any third party, to suspend, deactivate, or
          terminate your access to the Service, or any portion thereof, at any
          time, for any reason or for no reason, with or without notice.
        </li>
        <li>
          Grounds for termination may include, but are not limited to:
          <ol type="a">
            <li>Violations of these Terms or any incorporated policies;</li>
            <li>Requests by law enforcement or other governmental agencies;</li>
            <li>Discontinuance or material modification of the Service;</li>
            <li>Technical or security issues or problems;</li>
            <li>Extended periods of inactivity;</li>
            <li>
              Engagement by you in fraudulent, illegal, or improper activity.
            </li>
          </ol>
        </li>
        <li>
          Upon termination of your access, all rights granted to you under these
          Terms will immediately cease, and you agree to stop using the Service.
          All provisions of these Terms which by their nature should survive
          termination shall so survive, including, without limitation, ownership
          provisions, warranty disclaimers, indemnity, and limitations of
          liability.
        </li>
      </ol>

      <h2>11. ASSIGNMENT AND TRANSFER</h2>
      <ol>
        <li>
          You may not assign, delegate, or otherwise transfer your rights or
          obligations under this Agreement without prior written consent from
          WhatsWrapped. Any unauthorized assignment shall be null and void.
        </li>
        <li>
          WhatsWrapped may assign or transfer this Agreement without restriction
          and without notice, including in connection with a merger,
          acquisition, corporate reorganization, or sale of all or substantially
          all of its assets.
        </li>
      </ol>

      <h2>12. FORCE MAJEURE</h2>
      <ol>
        <li>
          WhatsWrapped shall not be liable or responsible to you for any failure
          or delay in its performance under this Agreement due to events,
          circumstances, or causes beyond its reasonable control, including but
          not limited to:
          <ol type="a">
            <li>Acts of God, natural disasters, or severe weather events;</li>
            <li>
              Epidemics, pandemics, quarantines, or public health emergencies;
            </li>
            <li>Labor disputes, strikes, or work stoppages;</li>
            <li>War, terrorism, riots, or civil unrest;</li>
            <li>Failure of public or private telecommunications networks;</li>
            <li>
              Cyberattacks, denial-of-service attacks, or other malicious
              interference;
            </li>
            <li>Regulatory or legal restrictions or embargoes.</li>
          </ol>
        </li>
        <li>
          In the event of such delay or failure, WhatsWrapped shall be excused
          from performance to the extent impacted, and shall make reasonable
          efforts to resume performance as soon as practicable.
        </li>
      </ol>

      <h2>13. GDPR RIGHTS AND CONTACT INFORMATION</h2>
      <ol>
        <li>
          If you are located in the European Economic Area (EEA) or the United
          Kingdom, you have the following rights under the General Data
          Protection Regulation (GDPR):
          <ol type="a">
            <li>The right to access the personal data we hold about you;</li>
            <li>
              The right to request correction of inaccurate or incomplete data;
            </li>
            <li>
              The right to request erasure of your personal data where legally
              permissible;
            </li>
            <li>
              The right to object to or restrict processing under certain
              conditions;
            </li>
            <li>The right to data portability;</li>
            <li>
              The right to withdraw consent where processing is based on
              consent;
            </li>
            <li>
              The right to lodge a complaint with a supervisory authority.
            </li>
          </ol>
        </li>
        <li>
          To exercise any of your GDPR rights, or if you have any questions
          about how we collect, process, or store your data, please contact us
          at: hello@whatswrapped.me
        </li>
        <li>
          We will respond to all data subject requests in accordance with the
          timeframes and conditions set out under GDPR.
        </li>
      </ol>
    </div>
  );
}
