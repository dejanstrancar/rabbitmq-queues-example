### NodeJS RabbitMQ implementation of queues

The example displays how you can sync data between services.
`api-publisher` is a source of data, `api-receiver_x` are consumers.

#### How to run

1. Install dependencies in each of the subprojects by running `yarn install` in each subfolder.
2. Run `docker-compose up` in the root folder.
3. Run `yarn start` in each subfolder.
4. Go to `http://localhost:15672` as `guest/guest` and check the queues.
