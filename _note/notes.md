---
layout: post
title: notes
---

<style>
html { max-width: 700px; }
</style>

### materials
- [paper clusters]({{ site.baseurl }}/graph)
- [task analysis]({{ site.baseurl }}/assets/Task-Analysis-Diagram.pdf)
- [statistics]({{ site.baseurl }}/assets/prelim-stats.pdf)
- [2d fitts](https://www.billbuxton.com/fitts92.html)

### extra
- [2017 questions](https://molecule.github.io/post/prelims%20from%20my%20perspective/)
- [past 160 exams](https://drive.google.com/drive/u/0/folders/0B62uerceUVsuczdhQXpMMDloVUE)
- [past questions](https://www2.eecs.berkeley.edu/Grads/CS/Prelims/hciqu.html)

# design principles for visualizations

maneesh agarwal et al. presents a three stage process for visual design
principles: 1. identify design principles, 2. instantiate design principles,
and 3. evaluate design principles. the most effective visualizations capitalize
on human ability to process images. design principles connect the visual design
of a visualization with the viewer's perception and cognition of the underlying
information the visualization is meant to convey. identifying and formulating
good design principles often requires analyzing the best hand-designed
visualizations, examining prior research on the perception and cognition of
visualizations, and, when necessary, conducting user studies into how visual
techniques affect perception and cognition. given a set of design rules and
quantitative evaluation criteria, we can use procedural techniques and/or
energy optimization to build automated visualization-design systems.

# getting the design right and the right design

bill buxton, u toronto/msr. they present results suggesting that users in user
studies speak very positively about a design when they are presented with one
design as compared to three functionally equivalent designs. additionally,
people re less positive about a design when multiple are presented, suggesting
that there is a soft rt of confirmation bias that users have- they want to
please the evaluator, or perhaps because they are afraid of having the
complaint reflect on their ability to use the tool. finally, there is a
suggestion that users studies are effective methods for identifying problems,
but not generating solutions.

# [search user interfaces, ch 1](http://searchuserinterfaces.com/book/sui_ch1_design.html)

marti hearst categorizes many facets of modern search interfaces along with
their transformations over time, highlighting the attention to detail which
carefully creates the refined experience of using search engines. search is a
mentally intensive task so each modification needs to be considered in the
frame of how a small error can have significant user experience impacts. she
highlights several suggestions for the design of search user interfaces: Offer
efficient and informative feedback, Balance user control with automated
actions, Reduce short-term memory load, Provide shortcuts, Reduce errors,
Recognize the importance of small details, and Recognize the importance of
aesthetics.

# how to conduct a heuristic evaluation

jacob nielsen ('95) provides guidelines on how to perform a hueristic
evaluation, which differs from a traditional user study. for example,
evaluators (who are not necessarily target users of the system) must identify
and reference specific design hueristics that the system violates, where a user
study gathers more generic and unprincipled feedback on usability. another
difference is that evaluators should be eagerly instructed on how to use the
system, where users in a user study should be kept in dark as long as possible
to find the pain points; where mistakes will be made. there is a tradeoff
between how many evaluators you should have and the complexity of system, but
in general from 3-5 is a good rule of thumb.

# at home with ubiquitous computing

keith edwards and rebecca grinter present seven challenges that both designers
and inbahitants of smart homes will have to face: the accidentally smart home
(difficulty with diagonosing and configuring system behavior), impromptu
interoperability (maintaining compatability between devices, both in a semantic
and syntactic sense), not having a systems administrator, designing for
domestic usage (rather than the office), social implications of aware home
technologies (e.g. washer machines actually didn't lower workload, just raised
expectations), reliability (microwave vs cpus), and finally inference in the
presence of ambiguity (how 'smart' does our home really have to be?). motivated
by the issue of balancing innovation/utility with the desire of a easy and
calming domestic lifestyle.

# interaction design research in hci

jonathan zimmerman provides an in-depth review of design in hci, including what
design means to both hci practitioners as well as professional designers. the
notion that 'design is magic' is shot down, by presenting a model of how
interaction design can exist on par with hci research design, with the
contributions from these designers being much more than mere decoration and
instead providing a whole process dump beyond just the final artifact. this
allows for the shared consideration of what the preferred state that the design
was moving towards was, and encourages discussion about whether this state is
actually preferred, why, and what the tradeoffs are compared with other
options. four metrics for evaluation of this type of research are presented:
extensibility, relevance, invention, and process.

# as we may think

vannevar bush, immediately after the end of WW II, addresses fellow scientists
who previously were devoted to the war effort. he envisions a world where we
weave and record trails of knowledge through information, both so that we can
access them over time, share the, , and view trails that others have blazed.
people in science are doing so much specialized work it is hard to keep up - in
comes the memex, which lets users do this trailblazing along with methods for
indexing and searching by association, which servers as a more natural way for
humans to thing about their work (and consequently, the work of others).

# mixed initiative user interfaces

eric horvitz (chi 99) makes the case for mixed-initiative interfaces in
response to the debate between the fervent camps of  direction manipulation and
automatic intelligent agents, instead highlighting that is best when they work
together, complementing each other at what they are best at: direct
manipulation for providing the user with a close metaphor for the object the
user is working with, and automated tasks for routine or mechanical jobs. his
listed design considerations are: add value w/ automation, consider goal
uncertainty, consider timing (for attention), act optimally (utility), use
dialog to confirm (if needed), minimizing error cost, provide refinement
mechanisms, keep history of past actions, and learn from them.

# tangible bits

h. ishii vision for what interacting with computing could be like.
complementary to mark weiser's ubiquitous computing (making the technology
invisible), he puts forward a new idea (couple bits and atoms) and three
supporting research prototypes which express this coupling (ambientROOM,
transBOARD, and metaDESK). he introduces the TUI (tangible user interface), and
draws analogies between GUI and TUI elements, like phicons (physical icons).
the concept of optical metaphors is brought up: digital light and shadows,
integrating how light and shadow play to illuminate our physical world into the
digital realm.

# how bodies matter

bjoern, srk. The human body has skill and dexterity which digital interaction
techniques do not full take advantage of. The mental modal of the ideal user of
a GUI would be that of a massive eye and finger. Five key concepts are
introduced when can be used as generative and evaluative design tools when
considering interactive technology. They are: thinking through doing,
performance, visibility, risk, and thickness of practice. People gesture not
only to communicate but also to lighten the mental load they are under. For
example, mouthing out these words as I am typing them refines my sense of my
own voice.

# read-wear edit-wear

jim hollan draws on schoen's theory of interfaces prompting a reflective
conversation for shaping problem-setting, which lies at the heart of
professional work, rather than many applications which instead focus on
problem-solving, and therefore already harden the context in which the problem
is framed. he embeds the wear of the document into the scrollbar of a zmacs
editor, and gives other examples of how wear could be implemented into existing
interface elements, essentially creating the data for a heat map of where the
interface is being used. the great things is that it does not require any
additional action by the user - essentially it comes 'free', though there are
issues of privacy and data ownership when it comes to the actual usage data.

# the computer for the 21st century

mark weiser introduces the concept of the computer for the 21st century by
introducing pads, tabs, and boards. these would be cheap, almost disposable
sources of computation that would lie in our environment in the same way that
writing is embedded into the world around us. he imagines embedded virtuality:
drawing the computer into the world, rather than simply creating a new world
and then drawing the user into it, which disrupts and isolates the communities
and workplaces that we operate inside of.

# groupware: challenges for developers

jonathan grudin, '94, presents 8 challenges for developers. separations exist
between orgs, groups, and users, and software applications for each of these
vary greatly, along with the issues faces while developing them, and even
beyond development to acceptance. grudin specifically presents the central
challenges that groupware developers face. first there was software for orgs,
than users, and now groups. because individuals act with a groupware
application, it has all the interface design challenges along with new
challenges stemming from its involvement in group processes. groupware at the
time of writing: email, bboard. 8 main challenges, work/benefit disparity,
critical mass, social process disruption, exception handling, unobtrusive
accessibility, evaluation difficulty, intuition failure, hard adoption. But!
There is hope... while considering a new, 'work' perspective.

# contextual inquiry ch3

to gain more understanding, go where the user or customer works. four
principles should guide how you act during this inquiry: context, partnership
interpretation, and focus. start off with the master/apprenticeship model but
realize that you are a designer and not an apprentice, so therefore you must
act differently, your time is limited, and instead of learning how to do the
task you must learn how to collect data to feed invention of a system, that
supports the work. this would be found in a partnership, where the shared focus
is the current task at hand. interpretation: fact -> hypothesis
(interpretation) -> implication, design idea. there is a structure that should
be followed during these inquiries, namely a conventional interview to get
things started, than an explicit stating of expectations during the work
session, the actual observations during work execution, and then a followup
interview where presentations of the what was gleaned from the inquiry and
passed back through the customer for a final stage of vetting.

# direct manipulation interfaces

- distance: directness, direct engagement
- forms: semantic (goals - expr meaning),
     articulatory (expr form - meaning)

jim hollan and don norman collab on one of the first (?) CHI conference papers,
in '85. describes direct manipulation, and tries to provide tools for measuring
directness and distance in interfaces, and is ripe with suggestions for
developers to consider when building interfaces for users. what you see is what
you get. it highlights that people must adjust to systems, and that short-term
usabilities studies should not be the sole predictor of a UI's success, since
it could be better but less familiar if it is a new idea, similar to the first
testers of GUIs who had only been experienced with text based interfaces.
direct manipulation coined by schniederman in 74, refers to systems that have
continuous data representation, physical action metaphors (no DSL), rapid
incremental reversible actions, which links back to the state representation.
this helps users: learnable, flexible (accessors), clear operations, lack of a
need for error messages, and more. directness is always relative. directness:
feeling that results from using an interface. distance: factors which underlie
a feeling of directness. distance causes directness. system metaphors:
conversation (talking about the world, e.g. comp program), model-world (model
the world and directly manipulate it). how close the model is to the world is a
measure of direct engagement. gulf of execution: how far are the users goals
from the mechanisms the system affordances? gulf of evaluation: how good the
system is able to convey data about its state back to the user?

# nielsen's 10 characteristics

[online source](https://www.nngroup.com/articles/ten-usability-heuristics/)

- Visibility of system status
- Match between system and the real world
- User control and freedom
- Consistency and standards
- Error prevention
- Recognition rather than recall
- Flexibility and efficiency of use
- Aesthetic and minimalist design
- Help users recognize, diagnose, and recover from errors
- Help and documentation

# radical atoms

TODO but not actually on the list

