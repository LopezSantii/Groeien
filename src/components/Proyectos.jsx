import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
  Link,
  Image,
} from "@nextui-org/react";

export default function Proyectos({ avatarimg, name, img, link }) {
  return (
    <Card isBlurred radius="sm">
      <CardBody className="overflow-visible p-0">
        <Link href={link} target="_blank">
          <Image
            radius="none"
            removeWrapper
            className="z-0 w-full h-full object-cover"
            src={img}
            alt={name}
          />
        </Link>
      </CardBody>
      <CardFooter>
        <div className="flex gap-4 items-center">
          <Link href={link} target="_blank">
            <Avatar
              className=" rounded-full border border-black/5"
              src={avatarimg}
            />
          </Link>
          <h3 className="text-lg">{name}</h3>
        </div>
      </CardFooter>
    </Card>
  );
}
