import Hero from "@/components/hero";
import Insignia from "@/components/insignia";
import LongCard from "@/components/long-card";
import ProjectCard from "@/components/project-card";
import Title from "@/components/title";
import { Earth, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="Hero">
        <Hero />
      </section>
      <section id="projects" >
        <Title title="Projectos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ProjectCard title="Linkio: Acortador de urls" description="Linkio es un acortador de enlaces que desarrollé inspirado por mi curiosidad de entender cómo funcionan estos proyectos tan clásicos en el mundo del desarrollo web. Crear Linkio ha sido una experiencia enriquecedora que me ha permitido profundizar en el funcionamiento de este tipo de herramientas y en los detalles técnicos que las hacen posibles." image="/project1.PNG" href="https://lkn.vercel.app/" >
            <div className="flex flex-col gap-3">
              <div className='flex flex-row flex-wrap gap-2'>
                <Insignia variant="outline" title='React' />
                <Insignia variant="outline" title='Typescript' />
                <Insignia variant="outline" title='TailwindCSS' />
                <Insignia variant="outline" title='Shadcn UI' />
              </div>
              <div className="flex flex-row gap-2">
                <Link href={"https://lkn.vercel.app/"} target="_blank">
                  <Insignia Icon={Earth} title='Sitio Web' className="p-1" />
                </Link>
                <Link href={"https://github.com/ajen0h/url-shortener"} target="_blank">
                  <Insignia Icon={Github} title='Repositorio' className="p-1" />
                </Link>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard title="Aplicación para guardar citas de libros" description="Esta aplicación fue desarrollada para un amigo mío que estudia Filosofía en Sevilla. Él necesitaba un espacio para guardar diversas frases y citas de libros, y poder acceder a ellas rápidamente. En respuesta a esta necesidad, creé esta aplicación. También cuenta con una versión de escritorio, que puedes encontrar en mi GitHub." image="/project2.png" href="https://citasdelibros.vercel.app/" >
            <div className="flex flex-col gap-3">
              <div className='flex flex-row flex-wrap gap-2'>
                <Insignia variant="outline" title='React' />
                <Insignia variant="outline" title='Typescript' />
                <Insignia variant="outline" title='TailwindCSS' />
                <Insignia variant="outline" title='Shadcn UI' />
                <Insignia variant="outline" title='Zustan' />
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                <Link href={"https://citasdelibros.vercel.app/"} target="_blank">
                  <Insignia Icon={Earth} title='Sitio Web' className="p-1" />
                </Link>
                <Link href={"https://github.com/ajen0h/CitasDeLibrosWeb"} target="_blank">
                  <Insignia Icon={Github} title='Repositorio' className="p-1" />
                </Link>
                <Link href={"https://github.com/ajen0h/CitasDeLibrosApp"} target="_blank">
                  <Insignia Icon={Github} title='Aplicación para Windows' className="p-1" />
                </Link>
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>
      <section className="Experiencia">
        <Title title="Experiencia" />
        <LongCard href="https://www.aicor.com/" image="/aicor.jpg" description="Aicor Consultores Informáticos" fecha="Mar. 2023 - Jun. 2023" title="Aicor TIC" />
      </section>
      <section className="Educacion">
        <Title title="Educacion" />
        <LongCard href="https://iesaverroes.org/" image="/averroes.png" description="Bachillerato de ciencias" fecha="2018 - 2020" title="IES Averroes" />
        <LongCard href="https://www.iestrassierra.com/" image="/trassierra.jpg" description="Desarrollo de aplicaciones web" fecha="2020 - 2023" title="IES Trassierra" />
      </section>
      <section className="Aptitudes">
        <Title title="Skills" />
        <div className="flex flex-wrap gap-3">
          <Insignia title='Nexjs' />
          <Insignia title='React' />
          <Insignia title='Typescript' />
          <Insignia title='TailwindCSS' />
          <Insignia title='Prisma' />
          <Insignia title='Postgres' />
          <Insignia title='Shadcn UI' />
        </div>
      </section>
    </>
  );
}
