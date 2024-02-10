import { Center, Spinner, Stack } from '@chakra-ui/react';

const Loading = () => {
  return (
    <div>
      <Center>
        <Stack direction="row">
          <Spinner size="xl" />
        </Stack>
      </Center>
    </div>
  );
};

export default Loading;
