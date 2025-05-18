// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import deploymentParams from '../../deployment-params.js';

export default buildModule("Moloch", (m) => {
  const moloch = m.contract("Moloch", [
	  deploymentParams.SUMMONER,
	  deploymentParams.TOKEN,
	  deploymentParams.PERIOD_DURATION_IN_SECONDS,
	  deploymentParams.VOTING_DURATON_IN_PERIODS,
	  deploymentParams.GRACE_DURATON_IN_PERIODS,
	  deploymentParams.PROPOSAL_DEPOSIT,
	  deploymentParams.DILUTION_BOUND,
	  deploymentParams.PROCESSING_REWARD
  ]);

  return { moloch };
});
