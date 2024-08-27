import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function CardPlan({ info, name, user }) {
  return (
    <Card isBlurred className="md:min-w-[250px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{user}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {info.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          color="secondary"
          href="https://github.com/nextui-org/nextui"
        >
          Consultar precios
        </Link>
      </CardFooter>
    </Card>
  );
}
