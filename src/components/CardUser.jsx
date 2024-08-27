import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  CardFooter,
} from "@nextui-org/react";

export default function CardUser({ name, user, description, img }) {
  return (
    <Card isBlurred className="min-w-[200px] w-[350px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={img} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className=" text-black text-small font-semibold leading-none">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {user}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small">{description}</CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
